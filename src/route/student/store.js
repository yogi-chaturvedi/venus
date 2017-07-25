/**
 * Created by Amit on 19-07-2017.
 */

import { observable } from 'mobx';
import {observer} from 'mobx-react';

class Student {

    @observable students = [
            {
                "id": 1,
                "class": "1",
                "rollNo": 101,
                "name": "Dharmendra Nagda",
                "attendance": [
                    {
                        "attribute": "Year",
                        "id": "2017",
                        "average": 70,
                        "value": [
                            {
                                "attribute": "Month",
                                "id": "1",
                                "average": 80,
                                "value": [
                                    {
                                        "attribute": "day",
                                        "id": "1",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "2",
                                        "value": "Absent"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "3",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "4",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "5",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "6",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "7",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "8",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "9",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "10",
                                        "value": "Absent"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "11",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "12",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "13",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "14",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "15",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "16",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "17",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "18",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "19",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "20",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "21",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "22",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "23",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "24",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "25",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "26",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "27",
                                        "value": "Absent"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "28",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "29",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "30",
                                        "value": "Present"
                                    },
                                    {
                                        "attribute": "day",
                                        "id": "31",
                                        "value": "Present"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ];

}

export default new Student();