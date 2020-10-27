import { Component, OnInit } from '@angular/core';
import { Formula } from 'src/app/models/formula';
import { Control, Form } from '../../../models';

@Component({
    selector: 'app-main-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    constructor() { }
    formulas: Formula[]
    formControls: Form[]
    units: string[]

    ngOnInit() {

        //#region A
        /* this.forms = [
            {
                formTitle: "Pressure In Pipes",
                col: 12,
                colSm: 12,
                colMd: 12,
                colLg: 6,
                colXl: 6,
                controls:
                    [
                        <Control>{ name: "Distance", help: "distance from target", type: "input", defaultValue: "0", id: "distance", title: "Distance", units: ['mm', 'cm', 'km', 'mile'], defaultUnit: "km" },
                        <Control>{ name: "Pipes Diameter", help: "pipes diameter", type: "input", defaultValue: "0", id: "diameter", title: "Diameter", units: ['mm', 'cm', 'km', 'mile'], defaultUnit: "cm" },
                        <Control>{ name: "Start Pressure", help: "start pressure", type: "input", defaultValue: "0", id: "startPressure", title: "Start Pressure", units: ['pa', 'mmHg', 'cmHg'], defaultUnit: "mmHg" }
                    ]
            },
            {
                formTitle: "Pressure In Pipes",
                col: 12,
                colSm: 12,
                colMd: 12,
                colLg: 6,
                colXl: 6,
                controls:
                    [
                        <Control>{ name: "Distance", help: "distance from target", type: "input", defaultValue: "0", id: "distance", title: "Distance", units: ['mm', 'cm', 'km', 'mile'], defaultUnit: "km" },
                        <Control>{ name: "Pipes Diameter", help: "pipes diameter", type: "input", defaultValue: "0", id: "diameter", title: "Diameter", units: ['mm', 'cm', 'km', 'mile'], defaultUnit: "cm" },
                        <Control>{ name: "Start Pressure", help: "start pressure", type: "input", defaultValue: "0", id: "startPressure", title: "Start Pressure", units: ['pa', 'mmHg', 'cmHg'], defaultUnit: "mmHg" }
                    ]
            },
            {
                formTitle: "Pressure In Pipes",
                col: 12,
                colSm: 12,
                colMd: 12,
                colLg: 6,
                colXl: 6,
                controls:
                    [
                        <Control>{ name: "Distance", help: "distance from target", type: "input", defaultValue: "0", id: "distance", title: "Distance", units: ['mm', 'cm', 'km', 'mile'], defaultUnit: "km" },
                        <Control>{ name: "Pipes Diameter", help: "pipes diameter", type: "input", defaultValue: "0", id: "diameter", title: "Diameter", units: ['mm', 'cm', 'km', 'mile'], defaultUnit: "cm" },
                        <Control>{ name: "Start Pressure", help: "start pressure", type: "input", defaultValue: "0", id: "startPressure", title: "Start Pressure", units: ['pa', 'mmHg', 'cmHg'], defaultUnit: "mmHg" }
                    ]
            },
            {
                formTitle: "Pressure In Pipes",
                col: 12,
                colSm: 12,
                colMd: 12,
                colLg: 6,
                colXl: 6,
                controls:
                    [
                        <Control>{ name: "Distance", help: "distance from target", type: "input", defaultValue: "0", id: "distance", title: "Distance", units: ['mm', 'cm', 'km', 'mile'], defaultUnit: "km" },
                        <Control>{ name: "Pipes Diameter", help: "pipes diameter", type: "input", defaultValue: "0", id: "diameter", title: "Diameter", units: ['mm', 'cm', 'km', 'mile'], defaultUnit: "cm" },
                        <Control>{ name: "Start Pressure", help: "start pressure", type: "input", defaultValue: "0", id: "startPressure", title: "Start Pressure", units: ['pa', 'mmHg', 'cmHg'], defaultUnit: "mmHg" }
                    ]
            },
            {
                formTitle: "Pressure In Pipes",
                col: 12,
                colSm: 12,
                colMd: 12,
                colLg: 6,
                colXl: 6,
                controls:
                    [
                        <Control>{ name: "Distance", help: "distance from target", type: "input", defaultValue: "0", id: "distance", title: "Distance", units: ['mm', 'cm', 'km', 'mile'], defaultUnit: "km" },
                        <Control>{ name: "Pipes Diameter", help: "pipes diameter", type: "input", defaultValue: "0", id: "diameter", title: "Diameter", units: ['mm', 'cm', 'km', 'mile'], defaultUnit: "cm" },
                        <Control>{ name: "Start Pressure", help: "start pressure", type: "input", defaultValue: "0", id: "startPressure", title: "Start Pressure", units: ['pa', 'mmHg', 'cmHg'], defaultUnit: "mmHg" }
                    ]
            }
        ] */
        //#endregion

        this.formulas = [
            {
                "Name": "GasVolumetricRateToMassRateConversionKnownGasGravity",
                "Id": 0,
                "Tags": null,
                "Groups": [
                    {
                        "Name": "Gas Properties",
                        "Id": 0,
                        "OrderIndex": 0,
                        "DisplayName": "Gas Properties",
                        "ValueControls": [
                            {
                                "Id": 0,
                                "OrderIndex": 0,
                                "ShortName": "SG",
                                "FullName": "Gas specific gravity",
                                "Tooltip": "Gas specific gravity",
                                "Value": 0.0,
                                "InternalUnit": null,
                                "UserUnit": null,
                                "DefaultValue": 0.0,
                                "DisplayFormat": "G",
                                "SignificantEpsilon": 0.001,
                                "IsWholeNumber": false,
                                "IsReadOnly": false,
                                "Units": [],
                                "MinLimit": {
                                    "Id": 0,
                                    "LimitValue": 0.55,
                                    "IsMinLimit": true,
                                    "LimitType": 1
                                },
                                "MaxLimit": {
                                    "Id": 0,
                                    "LimitValue": 1.8,
                                    "IsMinLimit": false,
                                    "LimitType": 1
                                }
                            },
                            {
                                "Id": 1,
                                "OrderIndex": 1,
                                "ShortName": "H<sub>2</sub>S",
                                "FullName": "H<sub>2</sub>S content",
                                "Tooltip": "H<sub>2</sub>S content",
                                "Value": 0.0,
                                "InternalUnit": null,
                                "UserUnit": "fraction",
                                "DefaultValue": 0.0,
                                "DisplayFormat": "G",
                                "SignificantEpsilon": 0.001,
                                "IsWholeNumber": false,
                                "IsReadOnly": false,
                                "Units": [
                                    {
                                        "Id": 0,
                                        "Symbol": "fraction",
                                        "LongName": "fraction",
                                        "A": 1.0,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "percent",
                                        "LongName": "percent",
                                        "A": 0.01,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    }
                                ],
                                "MinLimit": {
                                    "Id": 0,
                                    "LimitValue": 0.0,
                                    "IsMinLimit": true,
                                    "LimitType": 1
                                },
                                "MaxLimit": {
                                    "Id": 0,
                                    "LimitValue": 0.15,
                                    "IsMinLimit": false,
                                    "LimitType": 1
                                }
                            },
                            {
                                "Id": 2,
                                "OrderIndex": 2,
                                "ShortName": "CO<sub>2</sub>",
                                "FullName": "CO<sub>2</sub> content",
                                "Tooltip": "CO<sub>2</sub> content",
                                "Value": 0.0,
                                "InternalUnit": null,
                                "UserUnit": "fraction",
                                "DefaultValue": 0.0,
                                "DisplayFormat": "G",
                                "SignificantEpsilon": 0.001,
                                "IsWholeNumber": false,
                                "IsReadOnly": false,
                                "Units": [
                                    {
                                        "Id": 0,
                                        "Symbol": "fraction",
                                        "LongName": "fraction",
                                        "A": 1.0,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "percent",
                                        "LongName": "percent",
                                        "A": 0.01,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    }
                                ],
                                "MinLimit": {
                                    "Id": 0,
                                    "LimitValue": 0.0,
                                    "IsMinLimit": true,
                                    "LimitType": 1
                                },
                                "MaxLimit": {
                                    "Id": 0,
                                    "LimitValue": 0.15,
                                    "IsMinLimit": false,
                                    "LimitType": 1
                                }
                            },
                            {
                                "Id": 3,
                                "OrderIndex": 3,
                                "ShortName": "N<sub>2</sub>",
                                "FullName": "N<sub>2</sub> content",
                                "Tooltip": "N<sub>2</sub> content",
                                "Value": 0.0,
                                "InternalUnit": null,
                                "UserUnit": "fraction",
                                "DefaultValue": 0.0,
                                "DisplayFormat": "G",
                                "SignificantEpsilon": 0.001,
                                "IsWholeNumber": false,
                                "IsReadOnly": false,
                                "Units": [
                                    {
                                        "Id": 0,
                                        "Symbol": "fraction",
                                        "LongName": "fraction",
                                        "A": 1.0,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "percent",
                                        "LongName": "percent",
                                        "A": 0.01,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    }
                                ],
                                "MinLimit": {
                                    "Id": 0,
                                    "LimitValue": 0.0,
                                    "IsMinLimit": true,
                                    "LimitType": 1
                                },
                                "MaxLimit": {
                                    "Id": 0,
                                    "LimitValue": 0.15,
                                    "IsMinLimit": false,
                                    "LimitType": 1
                                }
                            }
                        ],
                        "OptionControls": [
                            {
                                "Name": "Z factor calculation method",
                                "Id": 0,
                                "OrderIndex": 4,
                                "ShortName": "Z<sub>g</sub>",
                                "Tooltip": "Z factor calculation method",
                                "Value": null,
                                "DefaultValueIndex": 0,
                                "Options": [
                                    "Dranchuk and Abu Kassem (1975)",
                                    "Dranchuk, Purvis and Robinson (1974)",
                                    "Hall and Yarborough (1973)"
                                ],
                                "IsReadOnly": false
                            }
                        ],
                        "IsVisible": true,
                        "IsResult": false
                    },
                    {
                        "Name": "InputAndConditions",
                        "Id": 0,
                        "OrderIndex": 1,
                        "DisplayName": "InputAndConditions",
                        "ValueControls": [
                            {
                                "Id": 0,
                                "OrderIndex": 0,
                                "ShortName": "q<sub>g</sub>",
                                "FullName": "Volumetric flow rate",
                                "Tooltip": "Volumetric flow rate",
                                "Value": 0.0,
                                "InternalUnit": null,
                                "UserUnit": "MMscf(60F)/d",
                                "DefaultValue": 0.0,
                                "DisplayFormat": "G",
                                "SignificantEpsilon": 0.001,
                                "IsWholeNumber": false,
                                "IsReadOnly": false,
                                "Units": [
                                    {
                                        "Id": 0,
                                        "Symbol": "scm(15C)/s",
                                        "LongName": "std cubic metres, 15 deg C/second",
                                        "A": 1.0,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "ksm3/d",
                                        "LongName": "thousand std cubic metres/ day",
                                        "A": 0.011574074074074073,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "MMscf(60F)/d",
                                        "LongName": "million standard cubic feet/day",
                                        "A": 0.3271106134259259,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "MMscm(15C)/d",
                                        "LongName": "million std cubic metres, 15 degC/day",
                                        "A": 11.574074074074074,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "MMstb(60F)/d",
                                        "LongName": "million stock tank barrels, 60 deg F/day",
                                        "A": 1.8401307870370369,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "Mscf(60F)/d",
                                        "LongName": "thousand standard cubic feet/day",
                                        "A": 0.00032711061342592592,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "Mscm(15C)/d",
                                        "LongName": "thousand std cubic metres, 15 degC/day",
                                        "A": 0.011574074074074073,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "Mstb(60F)/d",
                                        "LongName": "thousand stock tank barrels,60 deg F/day",
                                        "A": 0.001840130787037037,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "scf(60F)/d",
                                        "LongName": "standard cubic feet/day",
                                        "A": 3.2711061342592588E-07,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "scm(15C)/d",
                                        "LongName": "std cubic metres at 15 deg C/day",
                                        "A": 1.1574074074074074E-05,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "stb(60F)/d",
                                        "LongName": "stock tank barrels, 60 deg F/day",
                                        "A": 1.8401307870370371E-06,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    }
                                ],
                                "MinLimit": {
                                    "Id": 0,
                                    "LimitValue": "NaN",
                                    "IsMinLimit": true,
                                    "LimitType": 0
                                },
                                "MaxLimit": {
                                    "Id": 0,
                                    "LimitValue": "NaN",
                                    "IsMinLimit": false,
                                    "LimitType": 0
                                }
                            }
                        ],
                        "OptionControls": [],
                        "IsVisible": true,
                        "IsResult": false
                    },
                    {
                        "Name": "Results",
                        "Id": 0,
                        "OrderIndex": 2,
                        "DisplayName": "Results",
                        "ValueControls": [
                            {
                                "Id": 0,
                                "OrderIndex": 0,
                                "ShortName": "m<sub>g</sub>",
                                "FullName": "Mass flow rate",
                                "Tooltip": "Mass flow rate",
                                "Value": 0.0,
                                "InternalUnit": null,
                                "UserUnit": "lbm/h",
                                "DefaultValue": 0.0,
                                "DisplayFormat": "G",
                                "SignificantEpsilon": 0.001,
                                "IsWholeNumber": false,
                                "IsReadOnly": true,
                                "Units": [
                                    {
                                        "Id": 0,
                                        "Symbol": "kg/s",
                                        "LongName": "kilograms/second",
                                        "A": 1.0,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "g/s",
                                        "LongName": "grams/second",
                                        "A": 0.001,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "kg/d",
                                        "LongName": "kilogram per day",
                                        "A": 1.1574074074074074E-05,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "kg/h",
                                        "LongName": "kilograms/hour",
                                        "A": 0.00027777777777777778,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "kg/min",
                                        "LongName": "kilogram per min",
                                        "A": 0.016666666666666666,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "lbm/d",
                                        "LongName": "pound mass per day",
                                        "A": 5.2499120370370372E-06,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    },
                                    {
                                        "Id": 0,
                                        "Symbol": "lbm/h",
                                        "LongName": "pounds mass/hour",
                                        "A": 0.00012599788888888888,
                                        "B": 0.0,
                                        "C": 0.0,
                                        "D": 1.0
                                    }
                                ],
                                "MinLimit": {
                                    "Id": 0,
                                    "LimitValue": "NaN",
                                    "IsMinLimit": true,
                                    "LimitType": 0
                                },
                                "MaxLimit": {
                                    "Id": 0,
                                    "LimitValue": "NaN",
                                    "IsMinLimit": false,
                                    "LimitType": 0
                                }
                            }
                        ],
                        "OptionControls": [],
                        "IsVisible": true,
                        "IsResult": true
                    }
                ],
                "IsSuccessfull": false,
                "Message": null
            }
        ]
    }



    createControlClass(form: Form) {
        let classList = `${form.col > 0 ? 'col-' + form.col : ''} ${form.colSm > 0 ? 'col-sm-' + form.colSm : ''} ${form.colMd > 0 ? 'col-md-' + form.colMd : ''} ${form.colLg > 0 ? 'col-lg-' + form.colLg : ''} ${form.colXl > 0 ? 'col-xl-' + form.colXl : ''} `
        return classList.length > 4 ? classList : "col-12"
    }
}