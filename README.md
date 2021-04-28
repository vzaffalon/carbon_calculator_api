# carbon-calculator-api

### Description
Carbon footprint Calculator that calculates the yearly total emissions of a person.

This api runs on docker with NodeJS and Express.

For the purpose of simplification the projects uses a in memory database created on the store folder.

### Model description

- Category: Definition of carbon emission category
- Subcategory: Definition of category subcategory containing the data for Emission Factors and Measures
- Emissions: Helper model to calculate total_emission from subcategories use and emission factors

### Formulas used by each Category

- Housing:
    - Subcategories:
        -  Electricity : use (kWh/yr) * EF (kg CO2e/kWh) = emissions (kg CO2e/yr)
        -  Natural Gas : use (therms/yr) * EF (kg CO2e/therms) = emissions (kg CO2e/yr)
        -  Fuel Oil: use (litres/yr) * EF (kg CO2e/litre) = emissions (kg CO2e/yr)
        -  LPG : use (litres/yr) * EF (kg CO2e/litre) = emissions (kg CO2e/yr)
        -  Waste : use (kg/week) * 52 * EF (kg CO2e/kg) = emissions (kg CO2e/yr)
        -  Water : use (litres/day) * 365 * EF (kg CO2e/kWh) = emissions (kg CO2e/yr)

- Travel:
    -  Subcategories:
        -  Vehicle : distance (km/yr) * EF (kg CO2e/km) = emissions (kg CO2e/yr)
        -  Bus : distance (km/yr) * EF (kg CO2e/km) = emissions (kg CO2e/yr)
        -  Metro: distance (km/yr) * EF (kg CO2e/km) = emissions (kg CO2e/yr)
        -  Taxi: distance (km/yr) * EF (kg CO2e/km) = emissions (kg CO2e/yr)
        -  Rail: distance (km/yr) * EF (kg CO2e/km) = emissions (kg CO2e/yr)
        -  Flying : distance (km/yr)* 1.09 * EF (kg CO2e/km) = emissions (kg CO2e/yr)

- Food:
    -  Subcategories:
        -  Red meat: consumption (kCal/day)*365*EF (kg CO2e/kCal) = emissions (kg CO2e/yr)
        -  White meat: consumption (kCal/day)*365*EF (kg CO2e/kCal) = emissions (kg CO2e/yr)
        -  Dairy: consumption (kCal/day)*365*EF (kg CO2e/kCal) = emissions (kg CO2e/yr)
        -  Cereals: consumption (kCal/day)*365*EF (kg CO2e/kCal) = emissions (kg CO2e/yr)
        -  Vegetables: consumption (kCal/day)*365*EF (kg CO2e/kCal) = emissions (kg CO2e/yr)
        -  Fruit: consumption (kCal/day)*365*EF (kg CO2e/kCal) = emissions (kg CO2e/yr)
        -  Oils: consumption (kCal/day)*365*EF (kg CO2e/kCal) = emissions (kg CO2e/yr)
        -  Snacks: consumption (kCal/day)*365*EF (kg CO2e/kCal) = emissions (kg CO2e/yr)
        - Drinks: consumption (kCal/day)*365*EF (kg CO2e/kCal) = emissions (kg CO2e/yr)

Reference: http://shrinkthatfootprint.com/calculate-your-carbon-footprint

Emission Factors used: https://www.epa.gov/sites/production/files/2020-04/documents/ghg-emission-factors-hub.pdf

### Executing the project:
Build the container images
```
$ docker-compose build
```

Start running the containers
```
$ docker-compose up -d
```

The service will run on port 8000.

Stoping services
```
$ docker-compose down
```

### List categories:

#### Route: /api/categories

Method: Get

Parameters:

Success return example:

```
[
    {
        "id": 1,
        "name": "Housing",
        "us_average": 7500
    },
    {
        "id": 2,
        "name": "Travel",
        "us_average": 3500
    },
    {
        "id": 3,
        "name": "Food",
        "us_average": 1300
    }
]
```

### List subcategories from category:

#### Route: /api/categories/:id/subcategories

Method: Get

Success return example:

```
[
    {
        "id": 1,
        "name": "Electricity",
        "use": 0,
        "use_measure": "kWh/yr",
        "ef": 0.7,
        "ef_measure": "kg CO2e/kWh",
        "category_id": 1
    },
    {
        "id": 2,
        "name": "Natural Gas",
        "use": 0,
        "use_measure": "therms/yr",
        "ef": 0.7,
        "ef_measure": "kg CO2e/therms",
        "category_id": 1
    },
    {
        "id": 3,
        "name": "Fuel Oil",
        "use": 0,
        "use_measure": "litres/yr",
        "ef": 0.7,
        "ef_measure": "kg CO2e/litre",
        "category_id": 1
    },
    {
        "id": 4,
        "name": "LPG",
        "use": 0,
        "use_measure": "litres/yr",
        "ef": 0.7,
        "ef_measure": "kg CO2e/litre",
        "category_id": 1
    },
    {
        "id": 5,
        "name": "Waste",
        "use": 0,
        "use_measure": "kg/week",
        "ef": 36.4,
        "ef_measure": "kg CO2e/kg",
        "category_id": 1
    },
    {
        "id": 6,
        "name": "Water",
        "use": 0,
        "use_measure": "kg CO2e/kWh",
        "ef": 255.49999999999997,
        "ef_measure": "kg CO2e/kg",
        "category_id": 1
    }
]
```


### Calculate total emission:

#### Route: /api/calculate_total_emission

Method: Post

Parameters:

```
[{
    "subcategory_id": 1,
    "use": 50.0
},
{
    "subcategory_id": 7,
    "use": 50.0
},
{
    "subcategory_id": 14,
    "use": 50.0
}
]
```

Success return example:

```
{
    "total_emission": 22462.5,
    "total_emission_measure": "kg CO2e/yr",
    "categories_emissions": [
        {
            "category": {
                "id": 1,
                "name": "Housing",
                "us_average": 7500
            },
            "total_emission": 70,
            "total_emission_measure": "kg CO2e/yr"
        },
        {
            "category": {
                "id": 2,
                "name": "Travel",
                "us_average": 3500
            },
            "total_emission": 0,
            "total_emission_measure": "kg CO2e/yr"
        },
        {
            "category": {
                "id": 3,
                "name": "Food",
                "us_average": 1300
            },
            "total_emission": 557,
            "total_emission_measure": "kg CO2e/yr"
        }
    ]
}
```
