library = [ 
    {'question': 'Will it rain tomorrow?',
    'description' : 'observe and predict',
    'type': 'categorical',
    'features': [
                    {
                        'name': 'temperature',
                        'description':'more detail',
                        'type': 'continuous',
                        'units': 'Fahrenheit',
                        'lower': 0,
                        'upper': 100,
                        'mean': 68.5
                    },
                    {
                        'name': 'humidity',
                        'type': 'continuous',
                        'units': 'percentage',
                        'lower': 0,
                        'upper': 100,
                        'mean': 70.0
                    },
                    {
                        'name': 'wind speed',
                        'type': 'continuous',
                        'units': 'miles per hour',
                        'lower': 0,
                        'upper': 100,
                        'mean': 7.5
                    },
                    {
                        'name': 'precipitation',
                        'type': 'categorical',
                        'categories': ['yes', 'no'],
                        'weights': [0.5, 0.5]
                    }
                ],
    'target': {'possible_answers': ['Yes', 'No']},
    'training': {'headers': ['recorded_on',
    'temperature',
    'humidity',
    'wind_speed',
    'precipitation-yes',
    'precipitation-no',
    'target','note'],
    'observations': [['2023-07-16 21:17', 72.25, 64.57, 8.48, 0.0, 1.0, 'no',''],
    ['2023-07-16 21:17', 70.07, 65.62, 4.53, 0.0, 1.0, 'no',''],
    ['2023-07-16 21:17', 67.72, 70.66, 6.18, 0.0, 1.0, 'no',''],
    ['2023-07-16 21:17', 63.17, 71.98, 8.35, 1.0, 0.0, 'yes',''],
    ['2023-07-16 21:17', 71.81, 66.64, 12.49, 0.0, 1.0, 'no',''],
    ['2023-07-16 21:17', 66.63, 71.09, 2.98, 1.0, 0.0, 'yes',''],
    ['2023-07-16 21:17', 69.66, 68.33, 7.39, 1.0, 0.0, 'yes',''],
    ['2023-07-16 21:17', 67.18, 70.4, 9.14, 0.0, 1.0, 'no',''],
    ['2023-07-16 21:17', 72.83, 70.62, 9.17, 0.0, 1.0, 'no',''],
    ['2023-07-16 21:17', 69.01, 69.01, 6.31, 0.0, 1.0, 'no',''],
    ['2023-07-16 21:17', 70.86, 63.17, 8.3, 1.0, 0.0, 'yes',''],
    ['2023-07-16 21:17', 74.4, 68.98, 6.06, 0.0, 1.0, 'no',''],
    ['2023-07-16 21:17', 69.1, 73.16, 7.27, 0.0, 1.0, 'no',''],
    ['2023-07-16 21:17', 66.53, 68.66, 7.14, 0.0, 1.0, 'no',''],
    ['2023-07-16 21:17', 64.61, 71.43, 7.68, 0.0, 1.0, 'no',''],
    ['2023-07-16 21:17', 71.25, 75.97, 6.68, 1.0, 0.0, 'yes',''],
    ['2023-07-16 21:17', 70.81, 78.03, 4.64, 1.0, 0.0, 'yes',''],
    ['2023-07-16 21:17', 65.08, 68.95, 10.07, 1.0, 0.0, 'yes',''],
    ['2023-07-16 21:17', 68.17, 73.26, 8.3, 1.0, 0.0, 'yes',''],
    ['2023-07-16 21:17', 67.38, 69.97, 6.21, 1.0, 0.0, 'yes',''],
    ['2023-07-16 21:17', 68.23, 68.52, 4.77, 1.0, 0.0, 'yes',''],
    ['2023-07-16 21:17', 67.45, 70.58, 11.52, 1.0, 0.0, 'yes',''],
    ['2023-07-16 21:17', 64.93, 71.95, 6.68, 0.0, 1.0, 'no',''],
    ['2023-07-16 21:17', 71.62, 73.73, 5.0, 0.0, 1.0, 'no',''],
    ['2023-07-16 21:17', 62.95, 69.15, 6.46, 1.0, 0.0, 'yes','']]},
    'trained_on': 42,
    'coefficients': {'temperature': 0.2367782355450912,
    'humidity': -0.12389795668046169,
    'wind_speed': -0.892371546574006,
    'precipitation-yes': 18.607187389456104,
    'precipitation-no': -18.58496977322286,
    'intercept': 0.0},
    'performance': {}}
]