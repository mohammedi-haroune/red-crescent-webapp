# Sample:
# {
#     "type":"Feature",
#     "geometry":{
#       "type":"Point",
#       "coordinates":[36.7341667,3.0533055555555553]
#     },
#     "properties":{
#       "name": "EHS Abderrahmani (Bir Mourad Rais)",
#       "imageUrl": "/pictures/hospitals/EHS_Abderrahmani.jpg",
#       "location": "36°44'03.0\"N 3°03'11.9\"E"
#     }
# }
import re
import math
import json
import codecs
from collections import namedtuple
import pandas as pd


NAME_COLUMN = 'Hopitaux'
DMS_COLUMN = 'Coordonnées GPS'
DEFAULT_IMAGE_URL ='/pictures/hospitals/default.jpg'


Hospital = namedtuple('Hospital', ['name', 'lat', 'lng', 'dms', 'image_url'])


def format_hospital(hospital):
    return {
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [hospital.lat, hospital.lng]
        },
        'properties': {
            'name': hospital.name,
            'imageUrl': hospital.image_url,
            'location': hospital.dms
        }
    }

def format_hospitals(hospitals):
    for h in hospitals:
        yield format_hospital(h)


def read_excel_sheets(filename, sheet_names=None):
    if sheet_names is None:
        xl = pd.ExcelFile(filename)
        sheet_names = xl.sheet_names
    dataframes = {name: xl.parse(name) for name in sheet_names}
    return dataframes


def dd_to_dms(dd):
    decimals, number = math.modf(dd)
    d = int(number)
    m = int(decimals * 60)
    s = (dd - d - m / 60) * 3600.00
    return d, m, s


def format_dms(d, m, s, compass):
    return f'{abs(d)}º{abs(m)}\'{abs(s):2.1f}"{compass}'


def latlng_to_dms(lat, lng):
    lat_d, lat_m, lat_s = dd_to_dms(lat)
    lng_d, lng_m, lng_s = dd_to_dms(lng)
    lat_compass = 'N' if lat_d >= 0 else 'S'
    lng_compass = 'E' if lat_d >= 0 else 'W'
    return format_dms(lat_d, lat_m, lat_s, lat_compass) + format_dms(lng_d, lng_m, lng_s, lng_compass)


def dms_to_latlng(dms):
    lat_d, lat_m, lat_s, lat_direction, lng_d, lng_m, lng_s, lng_direction  =  re.split('[°\'"\s]', dms)
    lat = (float(lat_d) + float(lat_m)/60 + float(lat_s)/(60*60)) * (-1 if lat_direction == 'S' else 1)
    lng = (float(lng_d) + float(lng_m)/60 + float(lng_s)/(60*60)) * (-1 if lng_direction == 'W' else 1)
    return lat, lng


def read_hospitals(filename, name_column=NAME_COLUMN, dms_column=DMS_COLUMN):
    r = read_excel_sheets(filename)
    for wilaya, df in r.items():
        print(f'Processing wilaya: {wilaya}')
        rows = list(df.iterrows())
        for k, row in rows:
            name = row[name_column]
            dms = row[dms_column]
            is_nan = isinstance(dms, float) and math.isnan(dms)
            if not is_nan:
                try:
                    lat, lng = dms_to_latlng(dms)
                except ValueError as e:
                    print(f'Value error during the conversion to latlng of: {dms}', e)
                else:
                    yield Hospital(name=name, dms=dms, lat=lat, lng=lng, image_url=DEFAULT_IMAGE_URL)


def main():
    hospitals = read_hospitals('hospitals.xlsx')
    formatted = format_hospitals(hospitals)
    with codecs.open('hospitals.json', 'w+', encoding='utf-8') as f:
        json.dump(list(formatted), f, indent=2)


if __name__ == '__main__':
    main()
