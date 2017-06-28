/**
 * Created by Amit on 27-06-2017.
 */
const statesAndCities = [
    {
        "key": "1",
        "name": "Mumbai",
        "state": "Maharashtra"
    },
    {
        "key": "2",
        "name": "Delhi",
        "state": "Delhi"
    },
    {
        "key": "3",
        "name": "Bengaluru",
        "state": "Karnataka"
    },
    {
        "key": "4",
        "name": "Ahmedabad",
        "state": "Gujarat"
    },
    {
        "key": "5",
        "name": "Hyderabad",
        "state": "Telangana"
    },
    {
        "key": "6",
        "name": "Chennai",
        "state": "Tamil Nadu"
    },
    {
        "key": "7",
        "name": "Kolkata",
        "state": "West Bengal"
    },
    {
        "key": "8",
        "name": "Pune",
        "state": "Maharashtra"
    },
    {
        "key": "9",
        "name": "Jaipur",
        "state": "Rajasthan"
    },
    {
        "key": "10",
        "name": "Surat",
        "state": "Gujarat"
    },
    {
        "key": "11",
        "name": "Lucknow",
        "state": "Uttar Pradesh"
    },
    {
        "key": "12",
        "name": "Kanpur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "13",
        "name": "Nagpur",
        "state": "Maharashtra"
    },
    {
        "key": "14",
        "name": "Patna",
        "state": "Bihar"
    },
    {
        "key": "15",
        "name": "Indore",
        "state": "Madhya Pradesh"
    },
    {
        "key": "16",
        "name": "Thane",
        "state": "Maharashtra"
    },
    {
        "key": "17",
        "name": "Bhopal",
        "state": "Madhya Pradesh"
    },
    {
        "key": "18",
        "name": "Visakhapatnam",
        "state": "Andhra Pradesh"
    },
    {
        "key": "19",
        "name": "Vadodara",
        "state": "Gujarat"
    },
    {
        "key": "20",
        "name": "Firozabad",
        "state": "Uttar Pradesh"
    },
    {
        "key": "21",
        "name": "Ludhiana",
        "state": "Punjab"
    },
    {
        "key": "22",
        "name": "Rajkot",
        "state": "Gujarat"
    },
    {
        "key": "23",
        "name": "Agra",
        "state": "Uttar Pradesh"
    },
    {
        "key": "24",
        "name": "Siliguri",
        "state": "West Bengal"
    },
    {
        "key": "25",
        "name": "Nashik",
        "state": "Maharashtra"
    },
    {
        "key": "26",
        "name": "Farkeyabad",
        "state": "Haryana"
    },
    {
        "key": "27",
        "name": "Patiala",
        "state": "Punjab"
    },
    {
        "key": "28",
        "name": "Meerut",
        "state": "Uttar Pradesh"
    },
    {
        "key": "29",
        "name": "Kalyan-Dombivali",
        "state": "Maharashtra"
    },
    {
        "key": "30",
        "name": "Vasai-Virar",
        "state": "Maharashtra"
    },
    {
        "key": "31",
        "name": "Varanasi",
        "state": "Uttar Pradesh"
    },
    {
        "key": "32",
        "name": "Srinagar",
        "state": "Jammu and Kashmir"
    },
    {
        "key": "33",
        "name": "Dhanbad",
        "state": "Jharkhand"
    },
    {
        "key": "34",
        "name": "Jodhpur",
        "state": "Rajasthan"
    },
    {
        "key": "35",
        "name": "Amritsar",
        "state": "Punjab"
    },
    {
        "key": "36",
        "name": "Raipur",
        "state": "Chhattisgarh"
    },
    {
        "key": "37",
        "name": "Allahabad",
        "state": "Uttar Pradesh"
    },
    {
        "key": "38",
        "name": "Coimbatore",
        "state": "Tamil Nadu"
    },
    {
        "key": "39",
        "name": "Jabalpur",
        "state": "Madhya Pradesh"
    },
    {
        "key": "40",
        "name": "Gwalior",
        "state": "Madhya Pradesh"
    },
    {
        "key": "41",
        "name": "Vijayawada",
        "state": "Andhra Pradesh"
    },
    {
        "key": "42",
        "name": "Madurai",
        "state": "Tamil Nadu"
    },
    {
        "key": "43",
        "name": "Guwahati",
        "state": "Assam"
    },
    {
        "key": "44",
        "name": "Chandigarh",
        "state": "Chandigarh"
    },
    {
        "key": "45",
        "name": "Hubli-Dharwad",
        "state": "Karnataka"
    },
    {
        "key": "46",
        "name": "Amroha",
        "state": "Uttar Pradesh"
    },
    {
        "key": "47",
        "name": "Moradabad",
        "state": "Uttar Pradesh"
    },
    {
        "key": "48",
        "name": "Gurgaon",
        "state": "Haryana"
    },
    {
        "key": "49",
        "name": "Aligarh",
        "state": "Uttar Pradesh"
    },
    {
        "key": "50",
        "name": "Solapur",
        "state": "Maharashtra"
    },
    {
        "key": "51",
        "name": "Ranchi",
        "state": "Jharkhand"
    },
    {
        "key": "52",
        "name": "Jalandhar",
        "state": "Punjab"
    },
    {
        "key": "53",
        "name": "Tiruchirappalli",
        "state": "Tamil Nadu"
    },
    {
        "key": "54",
        "name": "Bhubaneswar",
        "state": "Odisha"
    },
    {
        "key": "55",
        "name": "Salem",
        "state": "Tamil Nadu"
    },
    {
        "key": "56",
        "name": "Warangal",
        "state": "Telangana"
    },
    {
        "key": "57",
        "name": "Mira-Bhayandar",
        "state": "Maharashtra"
    },
    {
        "key": "58",
        "name": "Thiruvananthapuram",
        "state": "Kerala"
    },
    {
        "key": "59",
        "name": "Bhiwandi",
        "state": "Maharashtra"
    },
    {
        "key": "60",
        "name": "Saharanpur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "61",
        "name": "Guntur",
        "state": "Andhra Pradesh"
    },
    {
        "key": "62",
        "name": "Amravati",
        "state": "Maharashtra"
    },
    {
        "key": "63",
        "name": "Bikaner",
        "state": "Rajasthan"
    },
    {
        "key": "64",
        "name": "Nokeya",
        "state": "Uttar Pradesh"
    },
    {
        "key": "65",
        "name": "Jamshedpur",
        "state": "Jharkhand"
    },
    {
        "key": "66",
        "name": "Bhilai Nagar",
        "state": "Chhattisgarh"
    },
    {
        "key": "67",
        "name": "Cuttack",
        "state": "Odisha"
    },
    {
        "key": "68",
        "name": "Kochi",
        "state": "Kerala"
    },
    {
        "key": "69",
        "name": "Udaipur",
        "state": "Rajasthan"
    },
    {
        "key": "70",
        "name": "Bhavnagar",
        "state": "Gujarat"
    },
    {
        "key": "71",
        "name": "Dehradun",
        "state": "Uttarakhand"
    },
    {
        "key": "72",
        "name": "Asansol",
        "state": "West Bengal"
    },
    {
        "key": "73",
        "name": "Nanded-Waghala",
        "state": "Maharashtra"
    },
    {
        "key": "74",
        "name": "Ajmer",
        "state": "Rajasthan"
    },
    {
        "key": "75",
        "name": "Jamnagar",
        "state": "Gujarat"
    },
    {
        "key": "76",
        "name": "Ujjain",
        "state": "Madhya Pradesh"
    },
    {
        "key": "77",
        "name": "Sangli",
        "state": "Maharashtra"
    },
    {
        "key": "78",
        "name": "Loni",
        "state": "Uttar Pradesh"
    },
    {
        "key": "79",
        "name": "Jhansi",
        "state": "Uttar Pradesh"
    },
    {
        "key": "80",
        "name": "Pondicherry",
        "state": "Puducherry"
    },
    {
        "key": "81",
        "name": "Nellore",
        "state": "Andhra Pradesh"
    },
    {
        "key": "82",
        "name": "Jammu",
        "state": "Jammu and Kashmir"
    },
    {
        "key": "83",
        "name": "Belagavi",
        "state": "Karnataka"
    },
    {
        "key": "84",
        "name": "Raurkela",
        "state": "Odisha"
    },
    {
        "key": "85",
        "name": "Mangaluru",
        "state": "Karnataka"
    },
    {
        "key": "86",
        "name": "Tirunelveli",
        "state": "Tamil Nadu"
    },
    {
        "key": "87",
        "name": "Malegaon",
        "state": "Maharashtra"
    },
    {
        "key": "88",
        "name": "Gaya",
        "state": "Bihar"
    },
    {
        "key": "89",
        "name": "Tiruppur",
        "state": "Tamil Nadu"
    },
    {
        "key": "90",
        "name": "Davanagere",
        "state": "Karnataka"
    },
    {
        "key": "91",
        "name": "Kozhikode",
        "state": "Kerala"
    },
    {
        "key": "92",
        "name": "Akola",
        "state": "Maharashtra"
    },
    {
        "key": "93",
        "name": "Kurnool",
        "state": "Andhra Pradesh"
    },
    {
        "key": "94",
        "name": "Bokaro Steel City",
        "state": "Jharkhand"
    },
    {
        "key": "95",
        "name": "Rajahmundry",
        "state": "Andhra Pradesh"
    },
    {
        "key": "96",
        "name": "Ballari",
        "state": "Karnataka"
    },
    {
        "key": "97",
        "name": "Agartala",
        "state": "Tripura"
    },
    {
        "key": "98",
        "name": "Bhagalpur",
        "state": "Bihar"
    },
    {
        "key": "99",
        "name": "Latur",
        "state": "Maharashtra"
    },
    {
        "key": "100",
        "name": "Dhule",
        "state": "Maharashtra"
    },
    {
        "key": "101",
        "name": "Korba",
        "state": "Chhattisgarh"
    },
    {
        "key": "102",
        "name": "Bhilwara",
        "state": "Rajasthan"
    },
    {
        "key": "103",
        "name": "Brahmapur",
        "state": "Odisha"
    },
    {
        "key": "104",
        "name": "Mysore",
        "state": "Karnataka"
    },
    {
        "key": "105",
        "name": "Muzaffarpur",
        "state": "Bihar"
    },
    {
        "key": "106",
        "name": "Ahmednagar",
        "state": "Maharashtra"
    },
    {
        "key": "107",
        "name": "Kollam",
        "state": "Kerala"
    },
    {
        "key": "108",
        "name": "Raghunathganj",
        "state": "West Bengal"
    },
    {
        "key": "109",
        "name": "Bilaspur",
        "state": "Chhattisgarh"
    },
    {
        "key": "110",
        "name": "Shahjahanpur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "111",
        "name": "Thrissur",
        "state": "Kerala"
    },
    {
        "key": "112",
        "name": "Alwar",
        "state": "Rajasthan"
    },
    {
        "key": "113",
        "name": "Kakinada",
        "state": "Andhra Pradesh"
    },
    {
        "key": "114",
        "name": "Nizamabad",
        "state": "Telangana"
    },
    {
        "key": "115",
        "name": "Sagar",
        "state": "Madhya Pradesh"
    },
    {
        "key": "116",
        "name": "Tumkur",
        "state": "Karnataka"
    },
    {
        "key": "117",
        "name": "Hisar",
        "state": "Haryana"
    },
    {
        "key": "118",
        "name": "Rohtak",
        "state": "Haryana"
    },
    {
        "key": "119",
        "name": "Panipat",
        "state": "Haryana"
    },
    {
        "key": "120",
        "name": "Darbhanga",
        "state": "Bihar"
    },
    {
        "key": "121",
        "name": "Kharagpur",
        "state": "West Bengal"
    },
    {
        "key": "122",
        "name": "Aizawl",
        "state": "Mizoram"
    },
    {
        "key": "123",
        "name": "Ichalkaranji",
        "state": "Maharashtra"
    },
    {
        "key": "124",
        "name": "Tirupati",
        "state": "Andhra Pradesh"
    },
    {
        "key": "125",
        "name": "Karnal",
        "state": "Haryana"
    },
    {
        "key": "126",
        "name": "Bathinda",
        "state": "Punjab"
    },
    {
        "key": "127",
        "name": "Rampur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "128",
        "name": "Shivamogga",
        "state": "Karnataka"
    },
    {
        "key": "129",
        "name": "Ratlam",
        "state": "Madhya Pradesh"
    },
    {
        "key": "130",
        "name": "Modinagar",
        "state": "Uttar Pradesh"
    },
    {
        "key": "131",
        "name": "Durg",
        "state": "Chhattisgarh"
    },
    {
        "key": "132",
        "name": "Shillong",
        "state": "Meghalaya"
    },
    {
        "key": "133",
        "name": "Imphal",
        "state": "Manipur"
    },
    {
        "key": "134",
        "name": "Hapur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "135",
        "name": "Ranipet",
        "state": "Tamil Nadu"
    },
    {
        "key": "136",
        "name": "Anantapur",
        "state": "Andhra Pradesh"
    },
    {
        "key": "137",
        "name": "Arrah",
        "state": "Bihar"
    },
    {
        "key": "138",
        "name": "Karimnagar",
        "state": "Telangana"
    },
    {
        "key": "139",
        "name": "Parbhani",
        "state": "Maharashtra"
    },
    {
        "key": "140",
        "name": "Etawah",
        "state": "Uttar Pradesh"
    },
    {
        "key": "141",
        "name": "Bharatpur",
        "state": "Rajasthan"
    },
    {
        "key": "142",
        "name": "Begusarai",
        "state": "Bihar"
    },
    {
        "key": "143",
        "name": "New Delhi",
        "state": "Delhi"
    },
    {
        "key": "144",
        "name": "Chhapra",
        "state": "Bihar"
    },
    {
        "key": "145",
        "name": "Kadapa",
        "state": "Andhra Pradesh"
    },
    {
        "key": "146",
        "name": "Ramagundam",
        "state": "Telangana"
    },
    {
        "key": "147",
        "name": "Pali",
        "state": "Rajasthan"
    },
    {
        "key": "148",
        "name": "Satna",
        "state": "Madhya Pradesh"
    },
    {
        "key": "149",
        "name": "Vizianagaram",
        "state": "Andhra Pradesh"
    },
    {
        "key": "150",
        "name": "Katihar",
        "state": "Bihar"
    },
    {
        "key": "151",
        "name": "Hardwar",
        "state": "Uttarakhand"
    },
    {
        "key": "152",
        "name": "Sonipat",
        "state": "Haryana"
    },
    {
        "key": "153",
        "name": "Nagercoil",
        "state": "Tamil Nadu"
    },
    {
        "key": "154",
        "name": "Thanjavur",
        "state": "Tamil Nadu"
    },
    {
        "key": "155",
        "name": "Murwara (Katni)",
        "state": "Madhya Pradesh"
    },
    {
        "key": "156",
        "name": "Naihati",
        "state": "West Bengal"
    },
    {
        "key": "157",
        "name": "Sambhal",
        "state": "Uttar Pradesh"
    },
    {
        "key": "158",
        "name": "Nadiad",
        "state": "Gujarat"
    },
    {
        "key": "159",
        "name": "Yamunanagar",
        "state": "Haryana"
    },
    {
        "key": "160",
        "name": "English Bazar",
        "state": "West Bengal"
    },
    {
        "key": "161",
        "name": "Eluru",
        "state": "Andhra Pradesh"
    },
    {
        "key": "162",
        "name": "Munger",
        "state": "Bihar"
    },
    {
        "key": "163",
        "name": "Panchkula",
        "state": "Haryana"
    },
    {
        "key": "164",
        "name": "Raayachuru",
        "state": "Karnataka"
    },
    {
        "key": "165",
        "name": "Panvel",
        "state": "Maharashtra"
    },
    {
        "key": "166",
        "name": "Deoghar",
        "state": "Jharkhand"
    },
    {
        "key": "167",
        "name": "Ongole",
        "state": "Andhra Pradesh"
    },
    {
        "key": "168",
        "name": "Nandyal",
        "state": "Andhra Pradesh"
    },
    {
        "key": "169",
        "name": "Morena",
        "state": "Madhya Pradesh"
    },
    {
        "key": "170",
        "name": "Bhiwani",
        "state": "Haryana"
    },
    {
        "key": "171",
        "name": "Porbandar",
        "state": "Gujarat"
    },
    {
        "key": "172",
        "name": "Palakkad",
        "state": "Kerala"
    },
    {
        "key": "173",
        "name": "Anand",
        "state": "Gujarat"
    },
    {
        "key": "174",
        "name": "Purnia",
        "state": "Bihar"
    },
    {
        "key": "175",
        "name": "Baharampur",
        "state": "West Bengal"
    },
    {
        "key": "176",
        "name": "Barmer",
        "state": "Rajasthan"
    },
    {
        "key": "177",
        "name": "Morvi",
        "state": "Gujarat"
    },
    {
        "key": "178",
        "name": "Orai",
        "state": "Uttar Pradesh"
    },
    {
        "key": "179",
        "name": "Bahraich",
        "state": "Uttar Pradesh"
    },
    {
        "key": "180",
        "name": "Sikar",
        "state": "Rajasthan"
    },
    {
        "key": "181",
        "name": "Vellore",
        "state": "Tamil Nadu"
    },
    {
        "key": "182",
        "name": "Singrauli",
        "state": "Madhya Pradesh"
    },
    {
        "key": "183",
        "name": "Khammam",
        "state": "Telangana"
    },
    {
        "key": "184",
        "name": "Mahesana",
        "state": "Gujarat"
    },
    {
        "key": "185",
        "name": "Silchar",
        "state": "Assam"
    },
    {
        "key": "186",
        "name": "Sambalpur",
        "state": "Odisha"
    },
    {
        "key": "187",
        "name": "Rewa",
        "state": "Madhya Pradesh"
    },
    {
        "key": "188",
        "name": "Unnao",
        "state": "Uttar Pradesh"
    },
    {
        "key": "189",
        "name": "Hugli-Chinsurah",
        "state": "West Bengal"
    },
    {
        "key": "190",
        "name": "Raiganj",
        "state": "West Bengal"
    },
    {
        "key": "191",
        "name": "Phusro",
        "state": "Jharkhand"
    },
    {
        "key": "192",
        "name": "Adityapur",
        "state": "Jharkhand"
    },
    {
        "key": "193",
        "name": "Alappuzha",
        "state": "Kerala"
    },
    {
        "key": "194",
        "name": "Bahadurgarh",
        "state": "Haryana"
    },
    {
        "key": "195",
        "name": "Machilipatnam",
        "state": "Andhra Pradesh"
    },
    {
        "key": "196",
        "name": "Rae Bareli",
        "state": "Uttar Pradesh"
    },
    {
        "key": "197",
        "name": "Jalpaiguri",
        "state": "West Bengal"
    },
    {
        "key": "198",
        "name": "Bharuch",
        "state": "Gujarat"
    },
    {
        "key": "199",
        "name": "Pathankot",
        "state": "Punjab"
    },
    {
        "key": "200",
        "name": "Hoshiarpur",
        "state": "Punjab"
    },
    {
        "key": "201",
        "name": "Baramula",
        "state": "Jammu and Kashmir"
    },
    {
        "key": "202",
        "name": "Adoni",
        "state": "Andhra Pradesh"
    },
    {
        "key": "203",
        "name": "Jind",
        "state": "Haryana"
    },
    {
        "key": "204",
        "name": "Tonk",
        "state": "Rajasthan"
    },
    {
        "key": "205",
        "name": "Tenali",
        "state": "Andhra Pradesh"
    },
    {
        "key": "206",
        "name": "Kancheepuram",
        "state": "Tamil Nadu"
    },
    {
        "key": "207",
        "name": "Vapi",
        "state": "Gujarat"
    },
    {
        "key": "208",
        "name": "Sirsa",
        "state": "Haryana"
    },
    {
        "key": "209",
        "name": "Navsari",
        "state": "Gujarat"
    },
    {
        "key": "210",
        "name": "Mahbubnagar",
        "state": "Telangana"
    },
    {
        "key": "211",
        "name": "Puri",
        "state": "Odisha"
    },
    {
        "key": "212",
        "name": "Robertson Pet",
        "state": "Karnataka"
    },
    {
        "key": "213",
        "name": "Erode",
        "state": "Tamil Nadu"
    },
    {
        "key": "214",
        "name": "Batala",
        "state": "Punjab"
    },
    {
        "key": "215",
        "name": "Haldwani-cum-Kathgodam",
        "state": "Uttarakhand"
    },
    {
        "key": "216",
        "name": "Vkeyisha",
        "state": "Madhya Pradesh"
    },
    {
        "key": "217",
        "name": "Saharsa",
        "state": "Bihar"
    },
    {
        "key": "218",
        "name": "Thanesar",
        "state": "Haryana"
    },
    {
        "key": "219",
        "name": "Chittoor",
        "state": "Andhra Pradesh"
    },
    {
        "key": "220",
        "name": "Veraval",
        "state": "Gujarat"
    },
    {
        "key": "221",
        "name": "Lakhimpur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "222",
        "name": "Sitapur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "223",
        "name": "Hindupur",
        "state": "Andhra Pradesh"
    },
    {
        "key": "224",
        "name": "Santipur",
        "state": "West Bengal"
    },
    {
        "key": "225",
        "name": "Balurghat",
        "state": "West Bengal"
    },
    {
        "key": "226",
        "name": "Ganjbasoda",
        "state": "Madhya Pradesh"
    },
    {
        "key": "227",
        "name": "Moga",
        "state": "Punjab"
    },
    {
        "key": "228",
        "name": "Proddatur",
        "state": "Andhra Pradesh"
    },
    {
        "key": "229",
        "name": "Srinagar",
        "state": "Uttarakhand"
    },
    {
        "key": "230",
        "name": "Medinipur",
        "state": "West Bengal"
    },
    {
        "key": "231",
        "name": "Habra",
        "state": "West Bengal"
    },
    {
        "key": "232",
        "name": "Sasaram",
        "state": "Bihar"
    },
    {
        "key": "233",
        "name": "Hajipur",
        "state": "Bihar"
    },
    {
        "key": "234",
        "name": "Bhuj",
        "state": "Gujarat"
    },
    {
        "key": "235",
        "name": "Shivpuri",
        "state": "Madhya Pradesh"
    },
    {
        "key": "236",
        "name": "Ranaghat",
        "state": "West Bengal"
    },
    {
        "key": "237",
        "name": "Shimla",
        "state": "Himachal Pradesh"
    },
    {
        "key": "238",
        "name": "Tiruvannamalai",
        "state": "Tamil Nadu"
    },
    {
        "key": "239",
        "name": "Kaithal",
        "state": "Haryana"
    },
    {
        "key": "240",
        "name": "Rajnandgaon",
        "state": "Chhattisgarh"
    },
    {
        "key": "241",
        "name": "Godhra",
        "state": "Gujarat"
    },
    {
        "key": "242",
        "name": "Hazaribag",
        "state": "Jharkhand"
    },
    {
        "key": "243",
        "name": "Bhimavaram",
        "state": "Andhra Pradesh"
    },
    {
        "key": "244",
        "name": "Mandsaur",
        "state": "Madhya Pradesh"
    },
    {
        "key": "245",
        "name": "Dibrugarh",
        "state": "Assam"
    },
    {
        "key": "246",
        "name": "Kolar",
        "state": "Karnataka"
    },
    {
        "key": "247",
        "name": "Bankura",
        "state": "West Bengal"
    },
    {
        "key": "248",
        "name": "Mandya",
        "state": "Karnataka"
    },
    {
        "key": "249",
        "name": "Dehri-on-Sone",
        "state": "Bihar"
    },
    {
        "key": "250",
        "name": "Madanapalle",
        "state": "Andhra Pradesh"
    },
    {
        "key": "251",
        "name": "Malerkotla",
        "state": "Punjab"
    },
    {
        "key": "252",
        "name": "Lalitpur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "253",
        "name": "Bettiah",
        "state": "Bihar"
    },
    {
        "key": "254",
        "name": "Pollachi",
        "state": "Tamil Nadu"
    },
    {
        "key": "255",
        "name": "Khanna",
        "state": "Punjab"
    },
    {
        "key": "256",
        "name": "Neemuch",
        "state": "Madhya Pradesh"
    },
    {
        "key": "257",
        "name": "Palwal",
        "state": "Haryana"
    },
    {
        "key": "258",
        "name": "Palanpur",
        "state": "Gujarat"
    },
    {
        "key": "259",
        "name": "Guntakal",
        "state": "Andhra Pradesh"
    },
    {
        "key": "260",
        "name": "Nabadwip",
        "state": "West Bengal"
    },
    {
        "key": "261",
        "name": "Udupi",
        "state": "Karnataka"
    },
    {
        "key": "262",
        "name": "Jagdalpur",
        "state": "Chhattisgarh"
    },
    {
        "key": "263",
        "name": "Motihari",
        "state": "Bihar"
    },
    {
        "key": "264",
        "name": "Pilibhit",
        "state": "Uttar Pradesh"
    },
    {
        "key": "265",
        "name": "Dimapur",
        "state": "Nagaland"
    },
    {
        "key": "266",
        "name": "Mohali",
        "state": "Punjab"
    },
    {
        "key": "267",
        "name": "Sadulpur",
        "state": "Rajasthan"
    },
    {
        "key": "268",
        "name": "Rajapalayam",
        "state": "Tamil Nadu"
    },
    {
        "key": "269",
        "name": "Dharmavaram",
        "state": "Andhra Pradesh"
    },
    {
        "key": "270",
        "name": "Kashipur",
        "state": "Uttarakhand"
    },
    {
        "key": "271",
        "name": "Sivakasi",
        "state": "Tamil Nadu"
    },
    {
        "key": "272",
        "name": "Darjiling",
        "state": "West Bengal"
    },
    {
        "key": "273",
        "name": "Chikkamagaluru",
        "state": "Karnataka"
    },
    {
        "key": "274",
        "name": "Gudivada",
        "state": "Andhra Pradesh"
    },
    {
        "key": "275",
        "name": "Baleshwar Town",
        "state": "Odisha"
    },
    {
        "key": "276",
        "name": "Mancherial",
        "state": "Telangana"
    },
    {
        "key": "277",
        "name": "Srikakulam",
        "state": "Andhra Pradesh"
    },
    {
        "key": "278",
        "name": "Adilabad",
        "state": "Telangana"
    },
    {
        "key": "279",
        "name": "Yavatmal",
        "state": "Maharashtra"
    },
    {
        "key": "280",
        "name": "Barnala",
        "state": "Punjab"
    },
    {
        "key": "281",
        "name": "Nagaon",
        "state": "Assam"
    },
    {
        "key": "282",
        "name": "Narasaraopet",
        "state": "Andhra Pradesh"
    },
    {
        "key": "283",
        "name": "Raigarh",
        "state": "Chhattisgarh"
    },
    {
        "key": "284",
        "name": "Roorkee",
        "state": "Uttarakhand"
    },
    {
        "key": "285",
        "name": "Valsad",
        "state": "Gujarat"
    },
    {
        "key": "286",
        "name": "Ambikapur",
        "state": "Chhattisgarh"
    },
    {
        "key": "287",
        "name": "Girkeyih",
        "state": "Jharkhand"
    },
    {
        "key": "288",
        "name": "Chandausi",
        "state": "Uttar Pradesh"
    },
    {
        "key": "289",
        "name": "Purulia",
        "state": "West Bengal"
    },
    {
        "key": "290",
        "name": "Patan",
        "state": "Gujarat"
    },
    {
        "key": "291",
        "name": "Bagaha",
        "state": "Bihar"
    },
    {
        "key": "292",
        "name": "Hardoi ",
        "state": "Uttar Pradesh"
    },
    {
        "key": "293",
        "name": "Achalpur",
        "state": "Maharashtra"
    },
    {
        "key": "294",
        "name": "Osmanabad",
        "state": "Maharashtra"
    },
    {
        "key": "295",
        "name": "Deesa",
        "state": "Gujarat"
    },
    {
        "key": "296",
        "name": "Nandurbar",
        "state": "Maharashtra"
    },
    {
        "key": "297",
        "name": "Azamgarh",
        "state": "Uttar Pradesh"
    },
    {
        "key": "298",
        "name": "Ramgarh",
        "state": "Jharkhand"
    },
    {
        "key": "299",
        "name": "Firozpur",
        "state": "Punjab"
    },
    {
        "key": "300",
        "name": "Baripada Town",
        "state": "Odisha"
    },
    {
        "key": "301",
        "name": "Karwar",
        "state": "Karnataka"
    },
    {
        "key": "302",
        "name": "Siwan",
        "state": "Bihar"
    },
    {
        "key": "303",
        "name": "Rajampet",
        "state": "Andhra Pradesh"
    },
    {
        "key": "304",
        "name": "Pudukkottai",
        "state": "Tamil Nadu"
    },
    {
        "key": "305",
        "name": "Anantnag",
        "state": "Jammu and Kashmir"
    },
    {
        "key": "306",
        "name": "Tadpatri",
        "state": "Andhra Pradesh"
    },
    {
        "key": "307",
        "name": "Satara",
        "state": "Maharashtra"
    },
    {
        "key": "308",
        "name": "Bhadrak",
        "state": "Odisha"
    },
    {
        "key": "309",
        "name": "Kishanganj",
        "state": "Bihar"
    },
    {
        "key": "310",
        "name": "Suryapet",
        "state": "Telangana"
    },
    {
        "key": "311",
        "name": "Wardha",
        "state": "Maharashtra"
    },
    {
        "key": "312",
        "name": "Ranebennuru",
        "state": "Karnataka"
    },
    {
        "key": "313",
        "name": "Amreli",
        "state": "Gujarat"
    },
    {
        "key": "314",
        "name": "Neyveli (TS)",
        "state": "Tamil Nadu"
    },
    {
        "key": "315",
        "name": "Jamalpur",
        "state": "Bihar"
    },
    {
        "key": "316",
        "name": "Marmagao",
        "state": "Goa"
    },
    {
        "key": "317",
        "name": "Udgir",
        "state": "Maharashtra"
    },
    {
        "key": "318",
        "name": "Tadepalligudem",
        "state": "Andhra Pradesh"
    },
    {
        "key": "319",
        "name": "Nagapattinam",
        "state": "Tamil Nadu"
    },
    {
        "key": "320",
        "name": "Buxar",
        "state": "Bihar"
    },
    {
        "key": "321",
        "name": "Aurangabad",
        "state": "Maharashtra"
    },
    {
        "key": "322",
        "name": "Jehanabad",
        "state": "Bihar"
    },
    {
        "key": "323",
        "name": "Phagwara",
        "state": "Punjab"
    },
    {
        "key": "324",
        "name": "Khair",
        "state": "Uttar Pradesh"
    },
    {
        "key": "325",
        "name": "Sawai Madhopur",
        "state": "Rajasthan"
    },
    {
        "key": "326",
        "name": "Kapurthala",
        "state": "Punjab"
    },
    {
        "key": "327",
        "name": "Chilakaluripet",
        "state": "Andhra Pradesh"
    },
    {
        "key": "328",
        "name": "Aurangabad",
        "state": "Bihar"
    },
    {
        "key": "329",
        "name": "Malappuram",
        "state": "Kerala"
    },
    {
        "key": "330",
        "name": "Rewari",
        "state": "Haryana"
    },
    {
        "key": "331",
        "name": "Nagaur",
        "state": "Rajasthan"
    },
    {
        "key": "332",
        "name": "Sultanpur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "333",
        "name": "Nagda",
        "state": "Madhya Pradesh"
    },
    {
        "key": "334",
        "name": "Port Blair",
        "state": "Andaman and Nicobar Islands"
    },
    {
        "key": "335",
        "name": "Lakhisarai",
        "state": "Bihar"
    },
    {
        "key": "336",
        "name": "Panaji",
        "state": "Goa"
    },
    {
        "key": "337",
        "name": "Tinsukia",
        "state": "Assam"
    },
    {
        "key": "338",
        "name": "Itarsi",
        "state": "Madhya Pradesh"
    },
    {
        "key": "339",
        "name": "Kohima",
        "state": "Nagaland"
    },
    {
        "key": "340",
        "name": "Balangir",
        "state": "Odisha"
    },
    {
        "key": "341",
        "name": "Nawada",
        "state": "Bihar"
    },
    {
        "key": "342",
        "name": "Jharsuguda",
        "state": "Odisha"
    },
    {
        "key": "343",
        "name": "Jagtial",
        "state": "Telangana"
    },
    {
        "key": "344",
        "name": "Viluppuram",
        "state": "Tamil Nadu"
    },
    {
        "key": "345",
        "name": "Amalner",
        "state": "Maharashtra"
    },
    {
        "key": "346",
        "name": "Zirakpur",
        "state": "Punjab"
    },
    {
        "key": "347",
        "name": "Tanda",
        "state": "Uttar Pradesh"
    },
    {
        "key": "348",
        "name": "Tiruchengode",
        "state": "Tamil Nadu"
    },
    {
        "key": "349",
        "name": "Nagina",
        "state": "Uttar Pradesh"
    },
    {
        "key": "350",
        "name": "Yemmiganur",
        "state": "Andhra Pradesh"
    },
    {
        "key": "351",
        "name": "Vaniyambadi",
        "state": "Tamil Nadu"
    },
    {
        "key": "352",
        "name": "Sarni",
        "state": "Madhya Pradesh"
    },
    {
        "key": "353",
        "name": "Theni Allinagaram",
        "state": "Tamil Nadu"
    },
    {
        "key": "354",
        "name": "Margao",
        "state": "Goa"
    },
    {
        "key": "355",
        "name": "Akot",
        "state": "Maharashtra"
    },
    {
        "key": "356",
        "name": "Sehore",
        "state": "Madhya Pradesh"
    },
    {
        "key": "357",
        "name": "Mhow Cantonment",
        "state": "Madhya Pradesh"
    },
    {
        "key": "358",
        "name": "Kot Kapura",
        "state": "Punjab"
    },
    {
        "key": "359",
        "name": "Makrana",
        "state": "Rajasthan"
    },
    {
        "key": "360",
        "name": "Pandharpur",
        "state": "Maharashtra"
    },
    {
        "key": "361",
        "name": "Miryalaguda",
        "state": "Telangana"
    },
    {
        "key": "362",
        "name": "Shamli",
        "state": "Uttar Pradesh"
    },
    {
        "key": "363",
        "name": "Seoni",
        "state": "Madhya Pradesh"
    },
    {
        "key": "364",
        "name": "Ranibennur",
        "state": "Karnataka"
    },
    {
        "key": "365",
        "name": "Kadiri",
        "state": "Andhra Pradesh"
    },
    {
        "key": "366",
        "name": "Shrirampur",
        "state": "Maharashtra"
    },
    {
        "key": "367",
        "name": "Rudrapur",
        "state": "Uttarakhand"
    },
    {
        "key": "368",
        "name": "Parli",
        "state": "Maharashtra"
    },
    {
        "key": "369",
        "name": "Najibabad",
        "state": "Uttar Pradesh"
    },
    {
        "key": "370",
        "name": "Nirmal",
        "state": "Telangana"
    },
    {
        "key": "371",
        "name": "Udhagamandalam",
        "state": "Tamil Nadu"
    },
    {
        "key": "372",
        "name": "Shikohabad",
        "state": "Uttar Pradesh"
    },
    {
        "key": "373",
        "name": "Jhumri Tilaiya",
        "state": "Jharkhand"
    },
    {
        "key": "374",
        "name": "Aruppukkottai",
        "state": "Tamil Nadu"
    },
    {
        "key": "375",
        "name": "Ponnani",
        "state": "Kerala"
    },
    {
        "key": "376",
        "name": "Jamui",
        "state": "Bihar"
    },
    {
        "key": "377",
        "name": "Sitamarhi",
        "state": "Bihar"
    },
    {
        "key": "378",
        "name": "Chirala",
        "state": "Andhra Pradesh"
    },
    {
        "key": "379",
        "name": "Anjar",
        "state": "Gujarat"
    },
    {
        "key": "380",
        "name": "Karaikal",
        "state": "Puducherry"
    },
    {
        "key": "381",
        "name": "Hansi",
        "state": "Haryana"
    },
    {
        "key": "382",
        "name": "Anakapalle",
        "state": "Andhra Pradesh"
    },
    {
        "key": "383",
        "name": "Mahasamund",
        "state": "Chhattisgarh"
    },
    {
        "key": "384",
        "name": "Farkeykot",
        "state": "Punjab"
    },
    {
        "key": "385",
        "name": "Saunda",
        "state": "Jharkhand"
    },
    {
        "key": "386",
        "name": "Dhoraji",
        "state": "Gujarat"
    },
    {
        "key": "387",
        "name": "Paramakudi",
        "state": "Tamil Nadu"
    },
    {
        "key": "388",
        "name": "Balaghat",
        "state": "Madhya Pradesh"
    },
    {
        "key": "389",
        "name": "Sujangarh",
        "state": "Rajasthan"
    },
    {
        "key": "390",
        "name": "Khambhat",
        "state": "Gujarat"
    },
    {
        "key": "391",
        "name": "Muktsar",
        "state": "Punjab"
    },
    {
        "key": "392",
        "name": "Rajpura",
        "state": "Punjab"
    },
    {
        "key": "393",
        "name": "Kavali",
        "state": "Andhra Pradesh"
    },
    {
        "key": "394",
        "name": "Dhamtari",
        "state": "Chhattisgarh"
    },
    {
        "key": "395",
        "name": "Ashok Nagar",
        "state": "Madhya Pradesh"
    },
    {
        "key": "396",
        "name": "Sardarshahar",
        "state": "Rajasthan"
    },
    {
        "key": "397",
        "name": "Mahuva",
        "state": "Gujarat"
    },
    {
        "key": "398",
        "name": "Bargarh",
        "state": "Odisha"
    },
    {
        "key": "399",
        "name": "Kamareddy",
        "state": "Telangana"
    },
    {
        "key": "400",
        "name": "Sahibganj",
        "state": "Jharkhand"
    },
    {
        "key": "401",
        "name": "Kothagudem",
        "state": "Telangana"
    },
    {
        "key": "402",
        "name": "Ramanagaram",
        "state": "Karnataka"
    },
    {
        "key": "403",
        "name": "Gokak",
        "state": "Karnataka"
    },
    {
        "key": "404",
        "name": "Tikamgarh",
        "state": "Madhya Pradesh"
    },
    {
        "key": "405",
        "name": "Araria",
        "state": "Bihar"
    },
    {
        "key": "406",
        "name": "Rishikesh",
        "state": "Uttarakhand"
    },
    {
        "key": "407",
        "name": "Shahdol",
        "state": "Madhya Pradesh"
    },
    {
        "key": "408",
        "name": "Medininagar (Daltonganj)",
        "state": "Jharkhand"
    },
    {
        "key": "409",
        "name": "Arakkonam",
        "state": "Tamil Nadu"
    },
    {
        "key": "410",
        "name": "Washim",
        "state": "Maharashtra"
    },
    {
        "key": "411",
        "name": "Sangrur",
        "state": "Punjab"
    },
    {
        "key": "412",
        "name": "Bodhan",
        "state": "Telangana"
    },
    {
        "key": "413",
        "name": "Fazilka",
        "state": "Punjab"
    },
    {
        "key": "414",
        "name": "Palacole",
        "state": "Andhra Pradesh"
    },
    {
        "key": "415",
        "name": "Keshod",
        "state": "Gujarat"
    },
    {
        "key": "416",
        "name": "Sullurpeta",
        "state": "Andhra Pradesh"
    },
    {
        "key": "417",
        "name": "Wadhwan",
        "state": "Gujarat"
    },
    {
        "key": "418",
        "name": "Gurdaspur",
        "state": "Punjab"
    },
    {
        "key": "419",
        "name": "Vatakara",
        "state": "Kerala"
    },
    {
        "key": "420",
        "name": "Tura",
        "state": "Meghalaya"
    },
    {
        "key": "421",
        "name": "Narnaul",
        "state": "Haryana"
    },
    {
        "key": "422",
        "name": "Kharar",
        "state": "Punjab"
    },
    {
        "key": "423",
        "name": "Yadgir",
        "state": "Karnataka"
    },
    {
        "key": "424",
        "name": "Ambejogai",
        "state": "Maharashtra"
    },
    {
        "key": "425",
        "name": "Ankleshwar",
        "state": "Gujarat"
    },
    {
        "key": "426",
        "name": "Savarkundla",
        "state": "Gujarat"
    },
    {
        "key": "427",
        "name": "Paradip",
        "state": "Odisha"
    },
    {
        "key": "428",
        "name": "Virudhachalam",
        "state": "Tamil Nadu"
    },
    {
        "key": "429",
        "name": "Kanhangad",
        "state": "Kerala"
    },
    {
        "key": "430",
        "name": "Kadi",
        "state": "Gujarat"
    },
    {
        "key": "431",
        "name": "Srivilliputhur",
        "state": "Tamil Nadu"
    },
    {
        "key": "432",
        "name": "Gobindgarh",
        "state": "Punjab"
    },
    {
        "key": "433",
        "name": "Tindivanam",
        "state": "Tamil Nadu"
    },
    {
        "key": "434",
        "name": "Mansa",
        "state": "Punjab"
    },
    {
        "key": "435",
        "name": "Taliparamba",
        "state": "Kerala"
    },
    {
        "key": "436",
        "name": "Manmad",
        "state": "Maharashtra"
    },
    {
        "key": "437",
        "name": "Tanuku",
        "state": "Andhra Pradesh"
    },
    {
        "key": "438",
        "name": "Rayachoti",
        "state": "Andhra Pradesh"
    },
    {
        "key": "439",
        "name": "Virudhunagar",
        "state": "Tamil Nadu"
    },
    {
        "key": "440",
        "name": "Koyilandy",
        "state": "Kerala"
    },
    {
        "key": "441",
        "name": "Jorhat",
        "state": "Assam"
    },
    {
        "key": "442",
        "name": "Karur",
        "state": "Tamil Nadu"
    },
    {
        "key": "443",
        "name": "Valparai",
        "state": "Tamil Nadu"
    },
    {
        "key": "444",
        "name": "Srikalahasti",
        "state": "Andhra Pradesh"
    },
    {
        "key": "445",
        "name": "Neyyattinkara",
        "state": "Kerala"
    },
    {
        "key": "446",
        "name": "Bapatla",
        "state": "Andhra Pradesh"
    },
    {
        "key": "447",
        "name": "Fatehabad",
        "state": "Haryana"
    },
    {
        "key": "448",
        "name": "Malout",
        "state": "Punjab"
    },
    {
        "key": "449",
        "name": "Sankarankovil",
        "state": "Tamil Nadu"
    },
    {
        "key": "450",
        "name": "Tenkasi",
        "state": "Tamil Nadu"
    },
    {
        "key": "451",
        "name": "Ratnagiri",
        "state": "Maharashtra"
    },
    {
        "key": "452",
        "name": "Rabkavi Banhatti",
        "state": "Karnataka"
    },
    {
        "key": "453",
        "name": "Sikandrabad",
        "state": "Uttar Pradesh"
    },
    {
        "key": "454",
        "name": "Chaibasa",
        "state": "Jharkhand"
    },
    {
        "key": "455",
        "name": "Chirmiri",
        "state": "Chhattisgarh"
    },
    {
        "key": "456",
        "name": "Palwancha",
        "state": "Telangana"
    },
    {
        "key": "457",
        "name": "Bhawanipatna",
        "state": "Odisha"
    },
    {
        "key": "458",
        "name": "Kayamkulam",
        "state": "Kerala"
    },
    {
        "key": "459",
        "name": "Pithampur",
        "state": "Madhya Pradesh"
    },
    {
        "key": "460",
        "name": "Nabha",
        "state": "Punjab"
    },
    {
        "key": "461",
        "name": "Shahabad, Hardoi",
        "state": "Uttar Pradesh"
    },
    {
        "key": "462",
        "name": "Dhenkanal",
        "state": "Odisha"
    },
    {
        "key": "463",
        "name": "Uran Islampur",
        "state": "Maharashtra"
    },
    {
        "key": "464",
        "name": "Gopalganj",
        "state": "Bihar"
    },
    {
        "key": "465",
        "name": "Bongaigaon City",
        "state": "Assam"
    },
    {
        "key": "466",
        "name": "Palani",
        "state": "Tamil Nadu"
    },
    {
        "key": "467",
        "name": "Pusad",
        "state": "Maharashtra"
    },
    {
        "key": "468",
        "name": "Sopore",
        "state": "Jammu and Kashmir"
    },
    {
        "key": "469",
        "name": "Pilkhuwa",
        "state": "Uttar Pradesh"
    },
    {
        "key": "470",
        "name": "Tarn Taran",
        "state": "Punjab"
    },
    {
        "key": "471",
        "name": "Renukoot",
        "state": "Uttar Pradesh"
    },
    {
        "key": "472",
        "name": "Mandamarri",
        "state": "Telangana"
    },
    {
        "key": "473",
        "name": "Shahabad",
        "state": "Karnataka"
    },
    {
        "key": "474",
        "name": "Barbil",
        "state": "Odisha"
    },
    {
        "key": "475",
        "name": "Koratla",
        "state": "Telangana"
    },
    {
        "key": "476",
        "name": "Madhubani",
        "state": "Bihar"
    },
    {
        "key": "477",
        "name": "Arambagh",
        "state": "West Bengal"
    },
    {
        "key": "478",
        "name": "Gohana",
        "state": "Haryana"
    },
    {
        "key": "479",
        "name": "Ladnu",
        "state": "Rajasthan"
    },
    {
        "key": "480",
        "name": "Pattukkottai",
        "state": "Tamil Nadu"
    },
    {
        "key": "481",
        "name": "Sirsi",
        "state": "Karnataka"
    },
    {
        "key": "482",
        "name": "Sircilla",
        "state": "Telangana"
    },
    {
        "key": "483",
        "name": "Tamluk",
        "state": "West Bengal"
    },
    {
        "key": "484",
        "name": "Jagraon",
        "state": "Punjab"
    },
    {
        "key": "485",
        "name": "AlipurdUrban Agglomerationr",
        "state": "West Bengal"
    },
    {
        "key": "486",
        "name": "Alirajpur",
        "state": "Madhya Pradesh"
    },
    {
        "key": "487",
        "name": "Tandur",
        "state": "Telangana"
    },
    {
        "key": "488",
        "name": "Nakeyupet",
        "state": "Andhra Pradesh"
    },
    {
        "key": "489",
        "name": "Tirupathur",
        "state": "Tamil Nadu"
    },
    {
        "key": "490",
        "name": "Tohana",
        "state": "Haryana"
    },
    {
        "key": "491",
        "name": "Ratangarh",
        "state": "Rajasthan"
    },
    {
        "key": "492",
        "name": "Dhubri",
        "state": "Assam"
    },
    {
        "key": "493",
        "name": "Masaurhi",
        "state": "Bihar"
    },
    {
        "key": "494",
        "name": "Visnagar",
        "state": "Gujarat"
    },
    {
        "key": "495",
        "name": "Vrindavan",
        "state": "Uttar Pradesh"
    },
    {
        "key": "496",
        "name": "Nokha",
        "state": "Rajasthan"
    },
    {
        "key": "497",
        "name": "Nagari",
        "state": "Andhra Pradesh"
    },
    {
        "key": "498",
        "name": "Narwana",
        "state": "Haryana"
    },
    {
        "key": "499",
        "name": "Ramanathapuram",
        "state": "Tamil Nadu"
    },
    {
        "key": "500",
        "name": "Ujhani",
        "state": "Uttar Pradesh"
    },
    {
        "key": "501",
        "name": "Samastipur",
        "state": "Bihar"
    },
    {
        "key": "502",
        "name": "Laharpur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "503",
        "name": "Sangamner",
        "state": "Maharashtra"
    },
    {
        "key": "504",
        "name": "Nimbahera",
        "state": "Rajasthan"
    },
    {
        "key": "505",
        "name": "Skeydipet",
        "state": "Telangana"
    },
    {
        "key": "506",
        "name": "Suri",
        "state": "West Bengal"
    },
    {
        "key": "507",
        "name": "Diphu",
        "state": "Assam"
    },
    {
        "key": "508",
        "name": "Jhargram",
        "state": "West Bengal"
    },
    {
        "key": "509",
        "name": "Shirpur-Warwade",
        "state": "Maharashtra"
    },
    {
        "key": "510",
        "name": "Tilhar",
        "state": "Uttar Pradesh"
    },
    {
        "key": "511",
        "name": "Sindhnur",
        "state": "Karnataka"
    },
    {
        "key": "512",
        "name": "Udumalaipettai",
        "state": "Tamil Nadu"
    },
    {
        "key": "513",
        "name": "Malkapur",
        "state": "Maharashtra"
    },
    {
        "key": "514",
        "name": "Wanaparthy",
        "state": "Telangana"
    },
    {
        "key": "515",
        "name": "Gudur",
        "state": "Andhra Pradesh"
    },
    {
        "key": "516",
        "name": "Kendujhar",
        "state": "Odisha"
    },
    {
        "key": "517",
        "name": "Mandla",
        "state": "Madhya Pradesh"
    },
    {
        "key": "518",
        "name": "Mandi",
        "state": "Himachal Pradesh"
    },
    {
        "key": "519",
        "name": "Nedumangad",
        "state": "Kerala"
    },
    {
        "key": "520",
        "name": "North Lakhimpur",
        "state": "Assam"
    },
    {
        "key": "521",
        "name": "Vinukonda",
        "state": "Andhra Pradesh"
    },
    {
        "key": "522",
        "name": "Tiptur",
        "state": "Karnataka"
    },
    {
        "key": "523",
        "name": "Gobichettipalayam",
        "state": "Tamil Nadu"
    },
    {
        "key": "524",
        "name": "Sunabeda",
        "state": "Odisha"
    },
    {
        "key": "525",
        "name": "Wani",
        "state": "Maharashtra"
    },
    {
        "key": "526",
        "name": "Upleta",
        "state": "Gujarat"
    },
    {
        "key": "527",
        "name": "Narasapuram",
        "state": "Andhra Pradesh"
    },
    {
        "key": "528",
        "name": "Nuzvkey",
        "state": "Andhra Pradesh"
    },
    {
        "key": "529",
        "name": "Tezpur",
        "state": "Assam"
    },
    {
        "key": "530",
        "name": "Una",
        "state": "Gujarat"
    },
    {
        "key": "531",
        "name": "Markapur",
        "state": "Andhra Pradesh"
    },
    {
        "key": "532",
        "name": "Sheopur",
        "state": "Madhya Pradesh"
    },
    {
        "key": "533",
        "name": "Thiruvarur",
        "state": "Tamil Nadu"
    },
    {
        "key": "534",
        "name": "Skeyhpur",
        "state": "Gujarat"
    },
    {
        "key": "535",
        "name": "Sahaswan",
        "state": "Uttar Pradesh"
    },
    {
        "key": "536",
        "name": "Suratgarh",
        "state": "Rajasthan"
    },
    {
        "key": "537",
        "name": "Shajapur",
        "state": "Madhya Pradesh"
    },
    {
        "key": "538",
        "name": "Rayagada",
        "state": "Odisha"
    },
    {
        "key": "539",
        "name": "Lonavla",
        "state": "Maharashtra"
    },
    {
        "key": "540",
        "name": "Ponnur",
        "state": "Andhra Pradesh"
    },
    {
        "key": "541",
        "name": "Kagaznagar",
        "state": "Telangana"
    },
    {
        "key": "542",
        "name": "Gadwal",
        "state": "Telangana"
    },
    {
        "key": "543",
        "name": "Bhatapara",
        "state": "Chhattisgarh"
    },
    {
        "key": "544",
        "name": "Kandukur",
        "state": "Andhra Pradesh"
    },
    {
        "key": "545",
        "name": "Sangareddy",
        "state": "Telangana"
    },
    {
        "key": "546",
        "name": "Unjha",
        "state": "Gujarat"
    },
    {
        "key": "547",
        "name": "Lunglei",
        "state": "Mizoram"
    },
    {
        "key": "548",
        "name": "Karimganj",
        "state": "Assam"
    },
    {
        "key": "549",
        "name": "Kannur",
        "state": "Kerala"
    },
    {
        "key": "550",
        "name": "Bobbili",
        "state": "Andhra Pradesh"
    },
    {
        "key": "551",
        "name": "Mokameh",
        "state": "Bihar"
    },
    {
        "key": "552",
        "name": "Talegaon Dabhade",
        "state": "Maharashtra"
    },
    {
        "key": "553",
        "name": "Anjangaon",
        "state": "Maharashtra"
    },
    {
        "key": "554",
        "name": "Mangrol",
        "state": "Gujarat"
    },
    {
        "key": "555",
        "name": "Sunam",
        "state": "Punjab"
    },
    {
        "key": "556",
        "name": "Gangarampur",
        "state": "West Bengal"
    },
    {
        "key": "557",
        "name": "Thiruvallur",
        "state": "Tamil Nadu"
    },
    {
        "key": "558",
        "name": "Tirur",
        "state": "Kerala"
    },
    {
        "key": "559",
        "name": "Rath",
        "state": "Uttar Pradesh"
    },
    {
        "key": "560",
        "name": "Jatani",
        "state": "Odisha"
    },
    {
        "key": "561",
        "name": "Viramgam",
        "state": "Gujarat"
    },
    {
        "key": "562",
        "name": "Rajsamand",
        "state": "Rajasthan"
    },
    {
        "key": "563",
        "name": "Yanam",
        "state": "Puducherry"
    },
    {
        "key": "564",
        "name": "Kottayam",
        "state": "Kerala"
    },
    {
        "key": "565",
        "name": "Panruti",
        "state": "Tamil Nadu"
    },
    {
        "key": "566",
        "name": "Dhuri",
        "state": "Punjab"
    },
    {
        "key": "567",
        "name": "Namakkal",
        "state": "Tamil Nadu"
    },
    {
        "key": "568",
        "name": "Kasaragod",
        "state": "Kerala"
    },
    {
        "key": "569",
        "name": "Modasa",
        "state": "Gujarat"
    },
    {
        "key": "570",
        "name": "Rayadurg",
        "state": "Andhra Pradesh"
    },
    {
        "key": "571",
        "name": "Supaul",
        "state": "Bihar"
    },
    {
        "key": "572",
        "name": "Kunnamkulam",
        "state": "Kerala"
    },
    {
        "key": "573",
        "name": "Umred",
        "state": "Maharashtra"
    },
    {
        "key": "574",
        "name": "Bellampalle",
        "state": "Telangana"
    },
    {
        "key": "575",
        "name": "Sibsagar",
        "state": "Assam"
    },
    {
        "key": "576",
        "name": "Mandi Dabwali",
        "state": "Haryana"
    },
    {
        "key": "577",
        "name": "Ottappalam",
        "state": "Kerala"
    },
    {
        "key": "578",
        "name": "Dumraon",
        "state": "Bihar"
    },
    {
        "key": "579",
        "name": "Samalkot",
        "state": "Andhra Pradesh"
    },
    {
        "key": "580",
        "name": "Jaggaiahpet",
        "state": "Andhra Pradesh"
    },
    {
        "key": "581",
        "name": "Goalpara",
        "state": "Assam"
    },
    {
        "key": "582",
        "name": "Tuni",
        "state": "Andhra Pradesh"
    },
    {
        "key": "583",
        "name": "Lachhmangarh",
        "state": "Rajasthan"
    },
    {
        "key": "584",
        "name": "Bhongir",
        "state": "Telangana"
    },
    {
        "key": "585",
        "name": "Amalapuram",
        "state": "Andhra Pradesh"
    },
    {
        "key": "586",
        "name": "Firozpur Cantt.",
        "state": "Punjab"
    },
    {
        "key": "587",
        "name": "Vikarabad",
        "state": "Telangana"
    },
    {
        "key": "588",
        "name": "Thiruvalla",
        "state": "Kerala"
    },
    {
        "key": "589",
        "name": "Sherkot",
        "state": "Uttar Pradesh"
    },
    {
        "key": "590",
        "name": "Palghar",
        "state": "Maharashtra"
    },
    {
        "key": "591",
        "name": "Shegaon",
        "state": "Maharashtra"
    },
    {
        "key": "592",
        "name": "Jangaon",
        "state": "Telangana"
    },
    {
        "key": "593",
        "name": "Bheemunipatnam",
        "state": "Andhra Pradesh"
    },
    {
        "key": "594",
        "name": "Panna",
        "state": "Madhya Pradesh"
    },
    {
        "key": "595",
        "name": "Thodupuzha",
        "state": "Kerala"
    },
    {
        "key": "596",
        "name": "KathUrban Agglomeration",
        "state": "Jammu and Kashmir"
    },
    {
        "key": "597",
        "name": "Palitana",
        "state": "Gujarat"
    },
    {
        "key": "598",
        "name": "Arwal",
        "state": "Bihar"
    },
    {
        "key": "599",
        "name": "Venkatagiri",
        "state": "Andhra Pradesh"
    },
    {
        "key": "600",
        "name": "Kalpi",
        "state": "Uttar Pradesh"
    },
    {
        "key": "601",
        "name": "Rajgarh (Churu)",
        "state": "Rajasthan"
    },
    {
        "key": "602",
        "name": "Sattenapalle",
        "state": "Andhra Pradesh"
    },
    {
        "key": "603",
        "name": "Arsikere",
        "state": "Karnataka"
    },
    {
        "key": "604",
        "name": "Ozar",
        "state": "Maharashtra"
    },
    {
        "key": "605",
        "name": "Thirumangalam",
        "state": "Tamil Nadu"
    },
    {
        "key": "606",
        "name": "Petlad",
        "state": "Gujarat"
    },
    {
        "key": "607",
        "name": "Nasirabad",
        "state": "Rajasthan"
    },
    {
        "key": "608",
        "name": "Phaltan",
        "state": "Maharashtra"
    },
    {
        "key": "609",
        "name": "Rampurhat",
        "state": "West Bengal"
    },
    {
        "key": "610",
        "name": "Nanjangud",
        "state": "Karnataka"
    },
    {
        "key": "611",
        "name": "Forbesganj",
        "state": "Bihar"
    },
    {
        "key": "612",
        "name": "Tundla",
        "state": "Uttar Pradesh"
    },
    {
        "key": "613",
        "name": "BhabUrban Agglomeration",
        "state": "Bihar"
    },
    {
        "key": "614",
        "name": "Sagara",
        "state": "Karnataka"
    },
    {
        "key": "615",
        "name": "Pithapuram",
        "state": "Andhra Pradesh"
    },
    {
        "key": "616",
        "name": "Sira",
        "state": "Karnataka"
    },
    {
        "key": "617",
        "name": "Bhadrachalam",
        "state": "Telangana"
    },
    {
        "key": "618",
        "name": "Charkhi Dadri",
        "state": "Haryana"
    },
    {
        "key": "619",
        "name": "Chatra",
        "state": "Jharkhand"
    },
    {
        "key": "620",
        "name": "Palasa Kasibugga",
        "state": "Andhra Pradesh"
    },
    {
        "key": "621",
        "name": "Nohar",
        "state": "Rajasthan"
    },
    {
        "key": "622",
        "name": "Yevla",
        "state": "Maharashtra"
    },
    {
        "key": "623",
        "name": "Sirhind Fatehgarh Sahib",
        "state": "Punjab"
    },
    {
        "key": "624",
        "name": "Bhainsa",
        "state": "Telangana"
    },
    {
        "key": "625",
        "name": "Parvathipuram",
        "state": "Andhra Pradesh"
    },
    {
        "key": "626",
        "name": "Shahade",
        "state": "Maharashtra"
    },
    {
        "key": "627",
        "name": "Chalakudy",
        "state": "Kerala"
    },
    {
        "key": "628",
        "name": "Narkatiaganj",
        "state": "Bihar"
    },
    {
        "key": "629",
        "name": "Kapadvanj",
        "state": "Gujarat"
    },
    {
        "key": "630",
        "name": "Macherla",
        "state": "Andhra Pradesh"
    },
    {
        "key": "631",
        "name": "Raghogarh-Vijaypur",
        "state": "Madhya Pradesh"
    },
    {
        "key": "632",
        "name": "Rupnagar",
        "state": "Punjab"
    },
    {
        "key": "633",
        "name": "Naugachhia",
        "state": "Bihar"
    },
    {
        "key": "634",
        "name": "Sendhwa",
        "state": "Madhya Pradesh"
    },
    {
        "key": "635",
        "name": "Byasanagar",
        "state": "Odisha"
    },
    {
        "key": "636",
        "name": "Sandila",
        "state": "Uttar Pradesh"
    },
    {
        "key": "637",
        "name": "Gooty",
        "state": "Andhra Pradesh"
    },
    {
        "key": "638",
        "name": "Salur",
        "state": "Andhra Pradesh"
    },
    {
        "key": "639",
        "name": "Nanpara",
        "state": "Uttar Pradesh"
    },
    {
        "key": "640",
        "name": "Sardhana",
        "state": "Uttar Pradesh"
    },
    {
        "key": "641",
        "name": "Vita",
        "state": "Maharashtra"
    },
    {
        "key": "642",
        "name": "Gumia",
        "state": "Jharkhand"
    },
    {
        "key": "643",
        "name": "Puttur",
        "state": "Karnataka"
    },
    {
        "key": "644",
        "name": "Jalandhar Cantt.",
        "state": "Punjab"
    },
    {
        "key": "645",
        "name": "Nehtaur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "646",
        "name": "Changanassery",
        "state": "Kerala"
    },
    {
        "key": "647",
        "name": "Mandapeta",
        "state": "Andhra Pradesh"
    },
    {
        "key": "648",
        "name": "Dumka",
        "state": "Jharkhand"
    },
    {
        "key": "649",
        "name": "Seohara",
        "state": "Uttar Pradesh"
    },
    {
        "key": "650",
        "name": "Umarkhed",
        "state": "Maharashtra"
    },
    {
        "key": "651",
        "name": "Madhupur",
        "state": "Jharkhand"
    },
    {
        "key": "652",
        "name": "Vikramasingapuram",
        "state": "Tamil Nadu"
    },
    {
        "key": "653",
        "name": "Punalur",
        "state": "Kerala"
    },
    {
        "key": "654",
        "name": "Kendrapara",
        "state": "Odisha"
    },
    {
        "key": "655",
        "name": "Sihor",
        "state": "Gujarat"
    },
    {
        "key": "656",
        "name": "Nellikuppam",
        "state": "Tamil Nadu"
    },
    {
        "key": "657",
        "name": "Samana",
        "state": "Punjab"
    },
    {
        "key": "658",
        "name": "Warora",
        "state": "Maharashtra"
    },
    {
        "key": "659",
        "name": "Nilambur",
        "state": "Kerala"
    },
    {
        "key": "660",
        "name": "Rasipuram",
        "state": "Tamil Nadu"
    },
    {
        "key": "661",
        "name": "Ramnagar",
        "state": "Uttarakhand"
    },
    {
        "key": "662",
        "name": "Jammalamadugu",
        "state": "Andhra Pradesh"
    },
    {
        "key": "663",
        "name": "Nawanshahr",
        "state": "Punjab"
    },
    {
        "key": "664",
        "name": "Thoubal",
        "state": "Manipur"
    },
    {
        "key": "665",
        "name": "Athni",
        "state": "Karnataka"
    },
    {
        "key": "666",
        "name": "Cherthala",
        "state": "Kerala"
    },
    {
        "key": "667",
        "name": "Skeyhi",
        "state": "Madhya Pradesh"
    },
    {
        "key": "668",
        "name": "Farooqnagar",
        "state": "Telangana"
    },
    {
        "key": "669",
        "name": "Peddapuram",
        "state": "Andhra Pradesh"
    },
    {
        "key": "670",
        "name": "Chirkunda",
        "state": "Jharkhand"
    },
    {
        "key": "671",
        "name": "Pachora",
        "state": "Maharashtra"
    },
    {
        "key": "672",
        "name": "Madhepura",
        "state": "Bihar"
    },
    {
        "key": "673",
        "name": "Pithoragarh",
        "state": "Uttarakhand"
    },
    {
        "key": "674",
        "name": "Tumsar",
        "state": "Maharashtra"
    },
    {
        "key": "675",
        "name": "Phalodi",
        "state": "Rajasthan"
    },
    {
        "key": "676",
        "name": "Tiruttani",
        "state": "Tamil Nadu"
    },
    {
        "key": "677",
        "name": "Rampura Phul",
        "state": "Punjab"
    },
    {
        "key": "678",
        "name": "Perinthalmanna",
        "state": "Kerala"
    },
    {
        "key": "679",
        "name": "Padrauna",
        "state": "Uttar Pradesh"
    },
    {
        "key": "680",
        "name": "Pipariya",
        "state": "Madhya Pradesh"
    },
    {
        "key": "681",
        "name": "Dalli-Rajhara",
        "state": "Chhattisgarh"
    },
    {
        "key": "682",
        "name": "Punganur",
        "state": "Andhra Pradesh"
    },
    {
        "key": "683",
        "name": "Mattannur",
        "state": "Kerala"
    },
    {
        "key": "684",
        "name": "Mathura",
        "state": "Uttar Pradesh"
    },
    {
        "key": "685",
        "name": "Thakurdwara",
        "state": "Uttar Pradesh"
    },
    {
        "key": "686",
        "name": "Nandivaram-Guduvancheri",
        "state": "Tamil Nadu"
    },
    {
        "key": "687",
        "name": "Mulbagal",
        "state": "Karnataka"
    },
    {
        "key": "688",
        "name": "Manjlegaon",
        "state": "Maharashtra"
    },
    {
        "key": "689",
        "name": "Wankaner",
        "state": "Gujarat"
    },
    {
        "key": "690",
        "name": "Sillod",
        "state": "Maharashtra"
    },
    {
        "key": "691",
        "name": "Nkeyadavole",
        "state": "Andhra Pradesh"
    },
    {
        "key": "692",
        "name": "Surapura",
        "state": "Karnataka"
    },
    {
        "key": "693",
        "name": "Rajagangapur",
        "state": "Odisha"
    },
    {
        "key": "694",
        "name": "Sheikhpura",
        "state": "Bihar"
    },
    {
        "key": "695",
        "name": "Parlakhemundi",
        "state": "Odisha"
    },
    {
        "key": "696",
        "name": "Kalimpong",
        "state": "West Bengal"
    },
    {
        "key": "697",
        "name": "Siruguppa",
        "state": "Karnataka"
    },
    {
        "key": "698",
        "name": "Arvi",
        "state": "Maharashtra"
    },
    {
        "key": "699",
        "name": "Limbdi",
        "state": "Gujarat"
    },
    {
        "key": "700",
        "name": "Barpeta",
        "state": "Assam"
    },
    {
        "key": "701",
        "name": "Manglaur",
        "state": "Uttarakhand"
    },
    {
        "key": "702",
        "name": "Repalle",
        "state": "Andhra Pradesh"
    },
    {
        "key": "703",
        "name": "Mudhol",
        "state": "Karnataka"
    },
    {
        "key": "704",
        "name": "Shujalpur",
        "state": "Madhya Pradesh"
    },
    {
        "key": "705",
        "name": "Mandvi",
        "state": "Gujarat"
    },
    {
        "key": "706",
        "name": "Thangadh",
        "state": "Gujarat"
    },
    {
        "key": "707",
        "name": "Sironj",
        "state": "Madhya Pradesh"
    },
    {
        "key": "708",
        "name": "Nandura",
        "state": "Maharashtra"
    },
    {
        "key": "709",
        "name": "Shoranur",
        "state": "Kerala"
    },
    {
        "key": "710",
        "name": "Nathdwara",
        "state": "Rajasthan"
    },
    {
        "key": "711",
        "name": "Periyakulam",
        "state": "Tamil Nadu"
    },
    {
        "key": "712",
        "name": "Sultanganj",
        "state": "Bihar"
    },
    {
        "key": "713",
        "name": "Medak",
        "state": "Telangana"
    },
    {
        "key": "714",
        "name": "Narayanpet",
        "state": "Telangana"
    },
    {
        "key": "715",
        "name": "Raxaul Bazar",
        "state": "Bihar"
    },
    {
        "key": "716",
        "name": "Rajauri",
        "state": "Jammu and Kashmir"
    },
    {
        "key": "717",
        "name": "Pernampattu",
        "state": "Tamil Nadu"
    },
    {
        "key": "718",
        "name": "Nainital",
        "state": "Uttarakhand"
    },
    {
        "key": "719",
        "name": "Ramachandrapuram",
        "state": "Andhra Pradesh"
    },
    {
        "key": "720",
        "name": "Vaijapur",
        "state": "Maharashtra"
    },
    {
        "key": "721",
        "name": "Nangal",
        "state": "Punjab"
    },
    {
        "key": "722",
        "name": "Skeylaghatta",
        "state": "Karnataka"
    },
    {
        "key": "723",
        "name": "Punch",
        "state": "Jammu and Kashmir"
    },
    {
        "key": "724",
        "name": "Pandhurna",
        "state": "Madhya Pradesh"
    },
    {
        "key": "725",
        "name": "Wadgaon Road",
        "state": "Maharashtra"
    },
    {
        "key": "726",
        "name": "Talcher",
        "state": "Odisha"
    },
    {
        "key": "727",
        "name": "Varkala",
        "state": "Kerala"
    },
    {
        "key": "728",
        "name": "Pilani",
        "state": "Rajasthan"
    },
    {
        "key": "729",
        "name": "Nowgong",
        "state": "Madhya Pradesh"
    },
    {
        "key": "730",
        "name": "Naila Janjgir",
        "state": "Chhattisgarh"
    },
    {
        "key": "731",
        "name": "Mapusa",
        "state": "Goa"
    },
    {
        "key": "732",
        "name": "Vellakoil",
        "state": "Tamil Nadu"
    },
    {
        "key": "733",
        "name": "Merta City",
        "state": "Rajasthan"
    },
    {
        "key": "734",
        "name": "Sivaganga",
        "state": "Tamil Nadu"
    },
    {
        "key": "735",
        "name": "Mandkeyeep",
        "state": "Madhya Pradesh"
    },
    {
        "key": "736",
        "name": "Sailu",
        "state": "Maharashtra"
    },
    {
        "key": "737",
        "name": "Vyara",
        "state": "Gujarat"
    },
    {
        "key": "738",
        "name": "Kovvur",
        "state": "Andhra Pradesh"
    },
    {
        "key": "739",
        "name": "Vadalur",
        "state": "Tamil Nadu"
    },
    {
        "key": "740",
        "name": "Nawabganj",
        "state": "Uttar Pradesh"
    },
    {
        "key": "741",
        "name": "Padra",
        "state": "Gujarat"
    },
    {
        "key": "742",
        "name": "Sainthia",
        "state": "West Bengal"
    },
    {
        "key": "743",
        "name": "Siana",
        "state": "Uttar Pradesh"
    },
    {
        "key": "744",
        "name": "Shahpur",
        "state": "Karnataka"
    },
    {
        "key": "745",
        "name": "Sojat",
        "state": "Rajasthan"
    },
    {
        "key": "746",
        "name": "Noorpur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "747",
        "name": "Paravoor",
        "state": "Kerala"
    },
    {
        "key": "748",
        "name": "Murtijapur",
        "state": "Maharashtra"
    },
    {
        "key": "749",
        "name": "Ramnagar",
        "state": "Bihar"
    },
    {
        "key": "750",
        "name": "Sundargarh",
        "state": "Odisha"
    },
    {
        "key": "751",
        "name": "Taki",
        "state": "West Bengal"
    },
    {
        "key": "752",
        "name": "Saundatti-Yellamma",
        "state": "Karnataka"
    },
    {
        "key": "753",
        "name": "Pathanamthitta",
        "state": "Kerala"
    },
    {
        "key": "754",
        "name": "Wadi",
        "state": "Karnataka"
    },
    {
        "key": "755",
        "name": "Rameshwaram",
        "state": "Tamil Nadu"
    },
    {
        "key": "756",
        "name": "Tasgaon",
        "state": "Maharashtra"
    },
    {
        "key": "757",
        "name": "Sikandra Rao",
        "state": "Uttar Pradesh"
    },
    {
        "key": "758",
        "name": "Sihora",
        "state": "Madhya Pradesh"
    },
    {
        "key": "759",
        "name": "Tiruvethipuram",
        "state": "Tamil Nadu"
    },
    {
        "key": "760",
        "name": "Tiruvuru",
        "state": "Andhra Pradesh"
    },
    {
        "key": "761",
        "name": "Mehkar",
        "state": "Maharashtra"
    },
    {
        "key": "762",
        "name": "Peringathur",
        "state": "Kerala"
    },
    {
        "key": "763",
        "name": "Perambalur",
        "state": "Tamil Nadu"
    },
    {
        "key": "764",
        "name": "Manvi",
        "state": "Karnataka"
    },
    {
        "key": "765",
        "name": "Zunheboto",
        "state": "Nagaland"
    },
    {
        "key": "766",
        "name": "Mahnar Bazar",
        "state": "Bihar"
    },
    {
        "key": "767",
        "name": "Attingal",
        "state": "Kerala"
    },
    {
        "key": "768",
        "name": "Shahbad",
        "state": "Haryana"
    },
    {
        "key": "769",
        "name": "Puranpur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "770",
        "name": "Nelamangala",
        "state": "Karnataka"
    },
    {
        "key": "771",
        "name": "Nakodar",
        "state": "Punjab"
    },
    {
        "key": "772",
        "name": "Lunawada",
        "state": "Gujarat"
    },
    {
        "key": "773",
        "name": "Murshkeyabad",
        "state": "West Bengal"
    },
    {
        "key": "774",
        "name": "Mahe",
        "state": "Puducherry"
    },
    {
        "key": "775",
        "name": "Lanka",
        "state": "Assam"
    },
    {
        "key": "776",
        "name": "Rudauli",
        "state": "Uttar Pradesh"
    },
    {
        "key": "777",
        "name": "Tuensang",
        "state": "Nagaland"
    },
    {
        "key": "778",
        "name": "Lakshmeshwar",
        "state": "Karnataka"
    },
    {
        "key": "779",
        "name": "Zira",
        "state": "Punjab"
    },
    {
        "key": "780",
        "name": "Yawal",
        "state": "Maharashtra"
    },
    {
        "key": "781",
        "name": "Thana Bhawan",
        "state": "Uttar Pradesh"
    },
    {
        "key": "782",
        "name": "Ramdurg",
        "state": "Karnataka"
    },
    {
        "key": "783",
        "name": "Pulgaon",
        "state": "Maharashtra"
    },
    {
        "key": "784",
        "name": "Sadasivpet",
        "state": "Telangana"
    },
    {
        "key": "785",
        "name": "Nargund",
        "state": "Karnataka"
    },
    {
        "key": "786",
        "name": "Neem-Ka-Thana",
        "state": "Rajasthan"
    },
    {
        "key": "787",
        "name": "Memari",
        "state": "West Bengal"
    },
    {
        "key": "788",
        "name": "Nilanga",
        "state": "Maharashtra"
    },
    {
        "key": "789",
        "name": "Naharlagun",
        "state": "Arunachal Pradesh"
    },
    {
        "key": "790",
        "name": "Pakaur",
        "state": "Jharkhand"
    },
    {
        "key": "791",
        "name": "Wai",
        "state": "Maharashtra"
    },
    {
        "key": "792",
        "name": "Tarikere",
        "state": "Karnataka"
    },
    {
        "key": "793",
        "name": "Malavalli",
        "state": "Karnataka"
    },
    {
        "key": "794",
        "name": "Raisen",
        "state": "Madhya Pradesh"
    },
    {
        "key": "795",
        "name": "Lahar",
        "state": "Madhya Pradesh"
    },
    {
        "key": "796",
        "name": "Uravakonda",
        "state": "Andhra Pradesh"
    },
    {
        "key": "797",
        "name": "Savanur",
        "state": "Karnataka"
    },
    {
        "key": "798",
        "name": "Sirohi",
        "state": "Rajasthan"
    },
    {
        "key": "799",
        "name": "Udhampur",
        "state": "Jammu and Kashmir"
    },
    {
        "key": "800",
        "name": "Umarga",
        "state": "Maharashtra"
    },
    {
        "key": "801",
        "name": "Pratapgarh",
        "state": "Rajasthan"
    },
    {
        "key": "802",
        "name": "Lingsugur",
        "state": "Karnataka"
    },
    {
        "key": "803",
        "name": "Usilampatti",
        "state": "Tamil Nadu"
    },
    {
        "key": "804",
        "name": "Palia Kalan",
        "state": "Uttar Pradesh"
    },
    {
        "key": "805",
        "name": "Wokha",
        "state": "Nagaland"
    },
    {
        "key": "806",
        "name": "Rajpipla",
        "state": "Gujarat"
    },
    {
        "key": "807",
        "name": "Vijayapura",
        "state": "Karnataka"
    },
    {
        "key": "808",
        "name": "Rawatbhata",
        "state": "Rajasthan"
    },
    {
        "key": "809",
        "name": "Sangaria",
        "state": "Rajasthan"
    },
    {
        "key": "810",
        "name": "Paithan",
        "state": "Maharashtra"
    },
    {
        "key": "811",
        "name": "Rahuri",
        "state": "Maharashtra"
    },
    {
        "key": "812",
        "name": "Patti",
        "state": "Punjab"
    },
    {
        "key": "813",
        "name": "Zakeypur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "814",
        "name": "Lalsot",
        "state": "Rajasthan"
    },
    {
        "key": "815",
        "name": "Maihar",
        "state": "Madhya Pradesh"
    },
    {
        "key": "816",
        "name": "Vedaranyam",
        "state": "Tamil Nadu"
    },
    {
        "key": "817",
        "name": "Nawapur",
        "state": "Maharashtra"
    },
    {
        "key": "818",
        "name": "Solan",
        "state": "Himachal Pradesh"
    },
    {
        "key": "819",
        "name": "Vapi",
        "state": "Gujarat"
    },
    {
        "key": "820",
        "name": "Sanawad",
        "state": "Madhya Pradesh"
    },
    {
        "key": "821",
        "name": "Warisaliganj",
        "state": "Bihar"
    },
    {
        "key": "822",
        "name": "Revelganj",
        "state": "Bihar"
    },
    {
        "key": "823",
        "name": "Sabalgarh",
        "state": "Madhya Pradesh"
    },
    {
        "key": "824",
        "name": "Tuljapur",
        "state": "Maharashtra"
    },
    {
        "key": "825",
        "name": "Simdega",
        "state": "Jharkhand"
    },
    {
        "key": "826",
        "name": "Musabani",
        "state": "Jharkhand"
    },
    {
        "key": "827",
        "name": "Kodungallur",
        "state": "Kerala"
    },
    {
        "key": "828",
        "name": "Phulabani",
        "state": "Odisha"
    },
    {
        "key": "829",
        "name": "Umreth",
        "state": "Gujarat"
    },
    {
        "key": "830",
        "name": "Narsipatnam",
        "state": "Andhra Pradesh"
    },
    {
        "key": "831",
        "name": "Nautanwa",
        "state": "Uttar Pradesh"
    },
    {
        "key": "832",
        "name": "Rajgir",
        "state": "Bihar"
    },
    {
        "key": "833",
        "name": "Yellandu",
        "state": "Telangana"
    },
    {
        "key": "834",
        "name": "Sathyamangalam",
        "state": "Tamil Nadu"
    },
    {
        "key": "835",
        "name": "Pilibanga",
        "state": "Rajasthan"
    },
    {
        "key": "836",
        "name": "Morshi",
        "state": "Maharashtra"
    },
    {
        "key": "837",
        "name": "Pehowa",
        "state": "Haryana"
    },
    {
        "key": "838",
        "name": "Sonepur",
        "state": "Bihar"
    },
    {
        "key": "839",
        "name": "Pappinisseri",
        "state": "Kerala"
    },
    {
        "key": "840",
        "name": "Zamania",
        "state": "Uttar Pradesh"
    },
    {
        "key": "841",
        "name": "Mihijam",
        "state": "Jharkhand"
    },
    {
        "key": "842",
        "name": "Purna",
        "state": "Maharashtra"
    },
    {
        "key": "843",
        "name": "Puliyankudi",
        "state": "Tamil Nadu"
    },
    {
        "key": "844",
        "name": "Shikarpur, Bulandshahr",
        "state": "Uttar Pradesh"
    },
    {
        "key": "845",
        "name": "Umaria",
        "state": "Madhya Pradesh"
    },
    {
        "key": "846",
        "name": "Porsa",
        "state": "Madhya Pradesh"
    },
    {
        "key": "847",
        "name": "Naugawan Sadat",
        "state": "Uttar Pradesh"
    },
    {
        "key": "848",
        "name": "Fatehpur Sikri",
        "state": "Uttar Pradesh"
    },
    {
        "key": "849",
        "name": "Manuguru",
        "state": "Telangana"
    },
    {
        "key": "850",
        "name": "Udaipur",
        "state": "Tripura"
    },
    {
        "key": "851",
        "name": "Pipar City",
        "state": "Rajasthan"
    },
    {
        "key": "852",
        "name": "Pattamundai",
        "state": "Odisha"
    },
    {
        "key": "853",
        "name": "Nanjikottai",
        "state": "Tamil Nadu"
    },
    {
        "key": "854",
        "name": "Taranagar",
        "state": "Rajasthan"
    },
    {
        "key": "855",
        "name": "Yerraguntla",
        "state": "Andhra Pradesh"
    },
    {
        "key": "856",
        "name": "Satana",
        "state": "Maharashtra"
    },
    {
        "key": "857",
        "name": "Sherghati",
        "state": "Bihar"
    },
    {
        "key": "858",
        "name": "Sankeshwara",
        "state": "Karnataka"
    },
    {
        "key": "859",
        "name": "Madikeri",
        "state": "Karnataka"
    },
    {
        "key": "860",
        "name": "Thuraiyur",
        "state": "Tamil Nadu"
    },
    {
        "key": "861",
        "name": "Sanand",
        "state": "Gujarat"
    },
    {
        "key": "862",
        "name": "Rajula",
        "state": "Gujarat"
    },
    {
        "key": "863",
        "name": "Kyathampalle",
        "state": "Telangana"
    },
    {
        "key": "864",
        "name": "Shahabad, Rampur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "865",
        "name": "Tilda Newra",
        "state": "Chhattisgarh"
    },
    {
        "key": "866",
        "name": "Narsinghgarh",
        "state": "Madhya Pradesh"
    },
    {
        "key": "867",
        "name": "Chittur-Thathamangalam",
        "state": "Kerala"
    },
    {
        "key": "868",
        "name": "Malaj Khand",
        "state": "Madhya Pradesh"
    },
    {
        "key": "869",
        "name": "Sarangpur",
        "state": "Madhya Pradesh"
    },
    {
        "key": "870",
        "name": "Robertsganj",
        "state": "Uttar Pradesh"
    },
    {
        "key": "871",
        "name": "Sirkali",
        "state": "Tamil Nadu"
    },
    {
        "key": "872",
        "name": "Radhanpur",
        "state": "Gujarat"
    },
    {
        "key": "873",
        "name": "Tiruchendur",
        "state": "Tamil Nadu"
    },
    {
        "key": "874",
        "name": "Utraula",
        "state": "Uttar Pradesh"
    },
    {
        "key": "875",
        "name": "Patratu",
        "state": "Jharkhand"
    },
    {
        "key": "876",
        "name": "Vijainagar, Ajmer",
        "state": "Rajasthan"
    },
    {
        "key": "877",
        "name": "Periyasemur",
        "state": "Tamil Nadu"
    },
    {
        "key": "878",
        "name": "Pathri",
        "state": "Maharashtra"
    },
    {
        "key": "879",
        "name": "Sadabad",
        "state": "Uttar Pradesh"
    },
    {
        "key": "880",
        "name": "Talikota",
        "state": "Karnataka"
    },
    {
        "key": "881",
        "name": "Sinnar",
        "state": "Maharashtra"
    },
    {
        "key": "882",
        "name": "Mungeli",
        "state": "Chhattisgarh"
    },
    {
        "key": "883",
        "name": "Sedam",
        "state": "Karnataka"
    },
    {
        "key": "884",
        "name": "Shikaripur",
        "state": "Karnataka"
    },
    {
        "key": "885",
        "name": "Sumerpur",
        "state": "Rajasthan"
    },
    {
        "key": "886",
        "name": "Sattur",
        "state": "Tamil Nadu"
    },
    {
        "key": "887",
        "name": "Sugauli",
        "state": "Bihar"
    },
    {
        "key": "888",
        "name": "Lumding",
        "state": "Assam"
    },
    {
        "key": "889",
        "name": "Vandavasi",
        "state": "Tamil Nadu"
    },
    {
        "key": "890",
        "name": "Titlagarh",
        "state": "Odisha"
    },
    {
        "key": "891",
        "name": "Uchgaon",
        "state": "Maharashtra"
    },
    {
        "key": "892",
        "name": "Mokokchung",
        "state": "Nagaland"
    },
    {
        "key": "893",
        "name": "Paschim Punropara",
        "state": "West Bengal"
    },
    {
        "key": "894",
        "name": "Sagwara",
        "state": "Rajasthan"
    },
    {
        "key": "895",
        "name": "Ramganj Mandi",
        "state": "Rajasthan"
    },
    {
        "key": "896",
        "name": "Tarakeswar",
        "state": "West Bengal"
    },
    {
        "key": "897",
        "name": "Mahalingapura",
        "state": "Karnataka"
    },
    {
        "key": "898",
        "name": "Dharmanagar",
        "state": "Tripura"
    },
    {
        "key": "899",
        "name": "Mahemdabad",
        "state": "Gujarat"
    },
    {
        "key": "900",
        "name": "Manendragarh",
        "state": "Chhattisgarh"
    },
    {
        "key": "901",
        "name": "Uran",
        "state": "Maharashtra"
    },
    {
        "key": "902",
        "name": "Tharamangalam",
        "state": "Tamil Nadu"
    },
    {
        "key": "903",
        "name": "Tirukkoyilur",
        "state": "Tamil Nadu"
    },
    {
        "key": "904",
        "name": "Pen",
        "state": "Maharashtra"
    },
    {
        "key": "905",
        "name": "Makhdumpur",
        "state": "Bihar"
    },
    {
        "key": "906",
        "name": "Maner",
        "state": "Bihar"
    },
    {
        "key": "907",
        "name": "Oddanchatram",
        "state": "Tamil Nadu"
    },
    {
        "key": "908",
        "name": "Palladam",
        "state": "Tamil Nadu"
    },
    {
        "key": "909",
        "name": "Mundi",
        "state": "Madhya Pradesh"
    },
    {
        "key": "910",
        "name": "Nabarangapur",
        "state": "Odisha"
    },
    {
        "key": "911",
        "name": "Mudalagi",
        "state": "Karnataka"
    },
    {
        "key": "912",
        "name": "Samalkha",
        "state": "Haryana"
    },
    {
        "key": "913",
        "name": "Nepanagar",
        "state": "Madhya Pradesh"
    },
    {
        "key": "914",
        "name": "Karjat",
        "state": "Maharashtra"
    },
    {
        "key": "915",
        "name": "Ranavav",
        "state": "Gujarat"
    },
    {
        "key": "916",
        "name": "Pedana",
        "state": "Andhra Pradesh"
    },
    {
        "key": "917",
        "name": "Pinjore",
        "state": "Haryana"
    },
    {
        "key": "918",
        "name": "Lakheri",
        "state": "Rajasthan"
    },
    {
        "key": "919",
        "name": "Pasan",
        "state": "Madhya Pradesh"
    },
    {
        "key": "920",
        "name": "Puttur",
        "state": "Andhra Pradesh"
    },
    {
        "key": "921",
        "name": "Vadakkuvalliyur",
        "state": "Tamil Nadu"
    },
    {
        "key": "922",
        "name": "Tirukalukundram",
        "state": "Tamil Nadu"
    },
    {
        "key": "923",
        "name": "Mahkeypur",
        "state": "Madhya Pradesh"
    },
    {
        "key": "924",
        "name": "Mussoorie",
        "state": "Uttarakhand"
    },
    {
        "key": "925",
        "name": "Muvattupuzha",
        "state": "Kerala"
    },
    {
        "key": "926",
        "name": "Rasra",
        "state": "Uttar Pradesh"
    },
    {
        "key": "927",
        "name": "Udaipurwati",
        "state": "Rajasthan"
    },
    {
        "key": "928",
        "name": "Manwath",
        "state": "Maharashtra"
    },
    {
        "key": "929",
        "name": "Adoor",
        "state": "Kerala"
    },
    {
        "key": "930",
        "name": "Uthamapalayam",
        "state": "Tamil Nadu"
    },
    {
        "key": "931",
        "name": "Partur",
        "state": "Maharashtra"
    },
    {
        "key": "932",
        "name": "Nahan",
        "state": "Himachal Pradesh"
    },
    {
        "key": "933",
        "name": "Ladwa",
        "state": "Haryana"
    },
    {
        "key": "934",
        "name": "Mankachar",
        "state": "Assam"
    },
    {
        "key": "935",
        "name": "Nongstoin",
        "state": "Meghalaya"
    },
    {
        "key": "936",
        "name": "Losal",
        "state": "Rajasthan"
    },
    {
        "key": "937",
        "name": "Sri Madhopur",
        "state": "Rajasthan"
    },
    {
        "key": "938",
        "name": "Ramngarh",
        "state": "Rajasthan"
    },
    {
        "key": "939",
        "name": "Mavelikkara",
        "state": "Kerala"
    },
    {
        "key": "940",
        "name": "Rawatsar",
        "state": "Rajasthan"
    },
    {
        "key": "941",
        "name": "Rajakhera",
        "state": "Rajasthan"
    },
    {
        "key": "942",
        "name": "Lar",
        "state": "Uttar Pradesh"
    },
    {
        "key": "943",
        "name": "Lal Gopalganj Nindaura",
        "state": "Uttar Pradesh"
    },
    {
        "key": "944",
        "name": "Muddebihal",
        "state": "Karnataka"
    },
    {
        "key": "945",
        "name": "Sirsaganj",
        "state": "Uttar Pradesh"
    },
    {
        "key": "946",
        "name": "Shahpura",
        "state": "Rajasthan"
    },
    {
        "key": "947",
        "name": "Surandai",
        "state": "Tamil Nadu"
    },
    {
        "key": "948",
        "name": "Sangole",
        "state": "Maharashtra"
    },
    {
        "key": "949",
        "name": "Pavagada",
        "state": "Karnataka"
    },
    {
        "key": "950",
        "name": "Tharad",
        "state": "Gujarat"
    },
    {
        "key": "951",
        "name": "Mansa",
        "state": "Gujarat"
    },
    {
        "key": "952",
        "name": "Umbergaon",
        "state": "Gujarat"
    },
    {
        "key": "953",
        "name": "Mavoor",
        "state": "Kerala"
    },
    {
        "key": "954",
        "name": "Nalbari",
        "state": "Assam"
    },
    {
        "key": "955",
        "name": "Talaja",
        "state": "Gujarat"
    },
    {
        "key": "956",
        "name": "Malur",
        "state": "Karnataka"
    },
    {
        "key": "957",
        "name": "Mangrulpir",
        "state": "Maharashtra"
    },
    {
        "key": "958",
        "name": "Soro",
        "state": "Odisha"
    },
    {
        "key": "959",
        "name": "Shahpura",
        "state": "Rajasthan"
    },
    {
        "key": "960",
        "name": "Vadnagar",
        "state": "Gujarat"
    },
    {
        "key": "961",
        "name": "Raisinghnagar",
        "state": "Rajasthan"
    },
    {
        "key": "962",
        "name": "Sindhagi",
        "state": "Karnataka"
    },
    {
        "key": "963",
        "name": "Sanduru",
        "state": "Karnataka"
    },
    {
        "key": "964",
        "name": "Sohna",
        "state": "Haryana"
    },
    {
        "key": "965",
        "name": "Manavadar",
        "state": "Gujarat"
    },
    {
        "key": "966",
        "name": "Pihani",
        "state": "Uttar Pradesh"
    },
    {
        "key": "967",
        "name": "Safkeyon",
        "state": "Haryana"
    },
    {
        "key": "968",
        "name": "Risod",
        "state": "Maharashtra"
    },
    {
        "key": "969",
        "name": "Rosera",
        "state": "Bihar"
    },
    {
        "key": "970",
        "name": "Sankari",
        "state": "Tamil Nadu"
    },
    {
        "key": "971",
        "name": "Malpura",
        "state": "Rajasthan"
    },
    {
        "key": "972",
        "name": "Sonamukhi",
        "state": "West Bengal"
    },
    {
        "key": "973",
        "name": "Shamsabad, Agra",
        "state": "Uttar Pradesh"
    },
    {
        "key": "974",
        "name": "Nokha",
        "state": "Bihar"
    },
    {
        "key": "975",
        "name": "PandUrban Agglomeration",
        "state": "West Bengal"
    },
    {
        "key": "976",
        "name": "Mainaguri",
        "state": "West Bengal"
    },
    {
        "key": "977",
        "name": "Afzalpur",
        "state": "Karnataka"
    },
    {
        "key": "978",
        "name": "Shirur",
        "state": "Maharashtra"
    },
    {
        "key": "979",
        "name": "Salaya",
        "state": "Gujarat"
    },
    {
        "key": "980",
        "name": "Shenkottai",
        "state": "Tamil Nadu"
    },
    {
        "key": "981",
        "name": "Pratapgarh",
        "state": "Tripura"
    },
    {
        "key": "982",
        "name": "Vadipatti",
        "state": "Tamil Nadu"
    },
    {
        "key": "983",
        "name": "Nagarkurnool",
        "state": "Telangana"
    },
    {
        "key": "984",
        "name": "Savner",
        "state": "Maharashtra"
    },
    {
        "key": "985",
        "name": "Sasvad",
        "state": "Maharashtra"
    },
    {
        "key": "986",
        "name": "Rudrapur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "987",
        "name": "Soron",
        "state": "Uttar Pradesh"
    },
    {
        "key": "988",
        "name": "Sholingur",
        "state": "Tamil Nadu"
    },
    {
        "key": "989",
        "name": "Pandharkaoda",
        "state": "Maharashtra"
    },
    {
        "key": "990",
        "name": "Perumbavoor",
        "state": "Kerala"
    },
    {
        "key": "991",
        "name": "Maddur",
        "state": "Karnataka"
    },
    {
        "key": "992",
        "name": "Nadbai",
        "state": "Rajasthan"
    },
    {
        "key": "993",
        "name": "Talode",
        "state": "Maharashtra"
    },
    {
        "key": "994",
        "name": "Shrigonda",
        "state": "Maharashtra"
    },
    {
        "key": "995",
        "name": "Madhugiri",
        "state": "Karnataka"
    },
    {
        "key": "996",
        "name": "Tekkalakote",
        "state": "Karnataka"
    },
    {
        "key": "997",
        "name": "Seoni-Malwa",
        "state": "Madhya Pradesh"
    },
    {
        "key": "998",
        "name": "Shirdi",
        "state": "Maharashtra"
    },
    {
        "key": "999",
        "name": "SUrban Agglomerationr",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1000",
        "name": "Terdal",
        "state": "Karnataka"
    },
    {
        "key": "1001",
        "name": "Raver",
        "state": "Maharashtra"
    },
    {
        "key": "1002",
        "name": "Tirupathur",
        "state": "Tamil Nadu"
    },
    {
        "key": "1003",
        "name": "Taraori",
        "state": "Haryana"
    },
    {
        "key": "1004",
        "name": "Mukhed",
        "state": "Maharashtra"
    },
    {
        "key": "1005",
        "name": "Manachanallur",
        "state": "Tamil Nadu"
    },
    {
        "key": "1006",
        "name": "Rehli",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1007",
        "name": "Sanchore",
        "state": "Rajasthan"
    },
    {
        "key": "1008",
        "name": "Rajura",
        "state": "Maharashtra"
    },
    {
        "key": "1009",
        "name": "Piro",
        "state": "Bihar"
    },
    {
        "key": "1010",
        "name": "Mudabkeyri",
        "state": "Karnataka"
    },
    {
        "key": "1011",
        "name": "Vadgaon Kasba",
        "state": "Maharashtra"
    },
    {
        "key": "1012",
        "name": "Nagar",
        "state": "Rajasthan"
    },
    {
        "key": "1013",
        "name": "Vijapur",
        "state": "Gujarat"
    },
    {
        "key": "1014",
        "name": "Viswanatham",
        "state": "Tamil Nadu"
    },
    {
        "key": "1015",
        "name": "Polur",
        "state": "Tamil Nadu"
    },
    {
        "key": "1016",
        "name": "Panagudi",
        "state": "Tamil Nadu"
    },
    {
        "key": "1017",
        "name": "Manawar",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1018",
        "name": "Tehri",
        "state": "Uttarakhand"
    },
    {
        "key": "1019",
        "name": "Samdhan",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1020",
        "name": "Pardi",
        "state": "Gujarat"
    },
    {
        "key": "1021",
        "name": "Rahatgarh",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1022",
        "name": "Panagar",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1023",
        "name": "Uthiramerur",
        "state": "Tamil Nadu"
    },
    {
        "key": "1024",
        "name": "Tirora",
        "state": "Maharashtra"
    },
    {
        "key": "1025",
        "name": "Rangia",
        "state": "Assam"
    },
    {
        "key": "1026",
        "name": "Sahjanwa",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1027",
        "name": "Wara Seoni",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1028",
        "name": "Magadi",
        "state": "Karnataka"
    },
    {
        "key": "1029",
        "name": "Rajgarh (Alwar)",
        "state": "Rajasthan"
    },
    {
        "key": "1030",
        "name": "Rafiganj",
        "state": "Bihar"
    },
    {
        "key": "1031",
        "name": "Tarana",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1032",
        "name": "Rampur Maniharan",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1033",
        "name": "Sheoganj",
        "state": "Rajasthan"
    },
    {
        "key": "1034",
        "name": "Raikot",
        "state": "Punjab"
    },
    {
        "key": "1035",
        "name": "Pauri",
        "state": "Uttarakhand"
    },
    {
        "key": "1036",
        "name": "Sumerpur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1037",
        "name": "Navalgund",
        "state": "Karnataka"
    },
    {
        "key": "1038",
        "name": "Shahganj",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1039",
        "name": "Marhaura",
        "state": "Bihar"
    },
    {
        "key": "1040",
        "name": "Tulsipur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1041",
        "name": "Sadri",
        "state": "Rajasthan"
    },
    {
        "key": "1042",
        "name": "Thiruthuraipoondi",
        "state": "Tamil Nadu"
    },
    {
        "key": "1043",
        "name": "Shiggaon",
        "state": "Karnataka"
    },
    {
        "key": "1044",
        "name": "Pallapatti",
        "state": "Tamil Nadu"
    },
    {
        "key": "1045",
        "name": "Mahendragarh",
        "state": "Haryana"
    },
    {
        "key": "1046",
        "name": "Sausar",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1047",
        "name": "Ponneri",
        "state": "Tamil Nadu"
    },
    {
        "key": "1048",
        "name": "Mahad",
        "state": "Maharashtra"
    },
    {
        "key": "1049",
        "name": "Lohardaga",
        "state": "Jharkhand"
    },
    {
        "key": "1050",
        "name": "Tirwaganj",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1051",
        "name": "Margherita",
        "state": "Assam"
    },
    {
        "key": "1052",
        "name": "Sundarnagar",
        "state": "Himachal Pradesh"
    },
    {
        "key": "1053",
        "name": "Rajgarh",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1054",
        "name": "Mangaldoi",
        "state": "Assam"
    },
    {
        "key": "1055",
        "name": "Renigunta",
        "state": "Andhra Pradesh"
    },
    {
        "key": "1056",
        "name": "Longowal",
        "state": "Punjab"
    },
    {
        "key": "1057",
        "name": "Ratia",
        "state": "Haryana"
    },
    {
        "key": "1058",
        "name": "Lalgudi",
        "state": "Tamil Nadu"
    },
    {
        "key": "1059",
        "name": "Shrirangapattana",
        "state": "Karnataka"
    },
    {
        "key": "1060",
        "name": "Niwari",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1061",
        "name": "Natham",
        "state": "Tamil Nadu"
    },
    {
        "key": "1062",
        "name": "Unnamalaikadai",
        "state": "Tamil Nadu"
    },
    {
        "key": "1063",
        "name": "PurqUrban Agglomerationzi",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1064",
        "name": "Shamsabad, Farrukhabad",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1065",
        "name": "Mirganj",
        "state": "Bihar"
    },
    {
        "key": "1066",
        "name": "Todaraisingh",
        "state": "Rajasthan"
    },
    {
        "key": "1067",
        "name": "Warhapur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1068",
        "name": "Rajam",
        "state": "Andhra Pradesh"
    },
    {
        "key": "1069",
        "name": "Urmar Tanda",
        "state": "Punjab"
    },
    {
        "key": "1070",
        "name": "Lonar",
        "state": "Maharashtra"
    },
    {
        "key": "1071",
        "name": "Powayan",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1072",
        "name": "P.N.Patti",
        "state": "Tamil Nadu"
    },
    {
        "key": "1073",
        "name": "Palampur",
        "state": "Himachal Pradesh"
    },
    {
        "key": "1074",
        "name": "Srisailam Project (Right Flank Colony) Township",
        "state": "Andhra Pradesh"
    },
    {
        "key": "1075",
        "name": "Sindagi",
        "state": "Karnataka"
    },
    {
        "key": "1076",
        "name": "Sandi",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1077",
        "name": "Vaikom",
        "state": "Kerala"
    },
    {
        "key": "1078",
        "name": "Malda",
        "state": "West Bengal"
    },
    {
        "key": "1079",
        "name": "Tharangambadi",
        "state": "Tamil Nadu"
    },
    {
        "key": "1080",
        "name": "Sakaleshapura",
        "state": "Karnataka"
    },
    {
        "key": "1081",
        "name": "Lalganj",
        "state": "Bihar"
    },
    {
        "key": "1082",
        "name": "Malkangiri",
        "state": "Odisha"
    },
    {
        "key": "1083",
        "name": "Rapar",
        "state": "Gujarat"
    },
    {
        "key": "1084",
        "name": "Mauganj",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1085",
        "name": "Todabhim",
        "state": "Rajasthan"
    },
    {
        "key": "1086",
        "name": "Srinivaspur",
        "state": "Karnataka"
    },
    {
        "key": "1087",
        "name": "Murliganj",
        "state": "Bihar"
    },
    {
        "key": "1088",
        "name": "Reengus",
        "state": "Rajasthan"
    },
    {
        "key": "1089",
        "name": "Sawantwadi",
        "state": "Maharashtra"
    },
    {
        "key": "1090",
        "name": "Tittakudi",
        "state": "Tamil Nadu"
    },
    {
        "key": "1091",
        "name": "Lilong",
        "state": "Manipur"
    },
    {
        "key": "1092",
        "name": "Rajaldesar",
        "state": "Rajasthan"
    },
    {
        "key": "1093",
        "name": "Pathardi",
        "state": "Maharashtra"
    },
    {
        "key": "1094",
        "name": "Achhnera",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1095",
        "name": "Pacode",
        "state": "Tamil Nadu"
    },
    {
        "key": "1096",
        "name": "Naraura",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1097",
        "name": "Nakur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1098",
        "name": "Palai",
        "state": "Kerala"
    },
    {
        "key": "1099",
        "name": "Morinda, India",
        "state": "Punjab"
    },
    {
        "key": "1100",
        "name": "Manasa",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1101",
        "name": "Nainpur",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1102",
        "name": "Sahaspur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1103",
        "name": "Pauni",
        "state": "Maharashtra"
    },
    {
        "key": "1104",
        "name": "Prithvipur",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1105",
        "name": "Ramtek",
        "state": "Maharashtra"
    },
    {
        "key": "1106",
        "name": "Silapathar",
        "state": "Assam"
    },
    {
        "key": "1107",
        "name": "Songadh",
        "state": "Gujarat"
    },
    {
        "key": "1108",
        "name": "Safipur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1109",
        "name": "Sohagpur",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1110",
        "name": "Mul",
        "state": "Maharashtra"
    },
    {
        "key": "1111",
        "name": "Sadulshahar",
        "state": "Rajasthan"
    },
    {
        "key": "1112",
        "name": "Phillaur",
        "state": "Punjab"
    },
    {
        "key": "1113",
        "name": "Sambhar",
        "state": "Rajasthan"
    },
    {
        "key": "1114",
        "name": "Prantij",
        "state": "Rajasthan"
    },
    {
        "key": "1115",
        "name": "Nagla",
        "state": "Uttarakhand"
    },
    {
        "key": "1116",
        "name": "Pattran",
        "state": "Punjab"
    },
    {
        "key": "1117",
        "name": "Mount Abu",
        "state": "Rajasthan"
    },
    {
        "key": "1118",
        "name": "Reoti",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1119",
        "name": "Tenu dam-cum-Kathhara",
        "state": "Jharkhand"
    },
    {
        "key": "1120",
        "name": "Panchla",
        "state": "West Bengal"
    },
    {
        "key": "1121",
        "name": "Sitarganj",
        "state": "Uttarakhand"
    },
    {
        "key": "1122",
        "name": "Pasighat",
        "state": "Arunachal Pradesh"
    },
    {
        "key": "1123",
        "name": "Motipur",
        "state": "Bihar"
    },
    {
        "key": "1124",
        "name": "O' Valley",
        "state": "Tamil Nadu"
    },
    {
        "key": "1125",
        "name": "Raghunathpur",
        "state": "West Bengal"
    },
    {
        "key": "1126",
        "name": "Suriyampalayam",
        "state": "Tamil Nadu"
    },
    {
        "key": "1127",
        "name": "Qadian",
        "state": "Punjab"
    },
    {
        "key": "1128",
        "name": "Rairangpur",
        "state": "Odisha"
    },
    {
        "key": "1129",
        "name": "Silvassa",
        "state": "Dadra and Nagar Haveli"
    },
    {
        "key": "1130",
        "name": "Nowrozabad (Khodargama)",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1131",
        "name": "Mangrol",
        "state": "Rajasthan"
    },
    {
        "key": "1132",
        "name": "Soyagaon",
        "state": "Maharashtra"
    },
    {
        "key": "1133",
        "name": "Sujanpur",
        "state": "Punjab"
    },
    {
        "key": "1134",
        "name": "Manihari",
        "state": "Bihar"
    },
    {
        "key": "1135",
        "name": "Sikanderpur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1136",
        "name": "Mangalvedhe",
        "state": "Maharashtra"
    },
    {
        "key": "1137",
        "name": "Phulera",
        "state": "Rajasthan"
    },
    {
        "key": "1138",
        "name": "Ron",
        "state": "Karnataka"
    },
    {
        "key": "1139",
        "name": "Sholavandan",
        "state": "Tamil Nadu"
    },
    {
        "key": "1140",
        "name": "Sakeypur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1141",
        "name": "Shamgarh",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1142",
        "name": "Thammampatti",
        "state": "Tamil Nadu"
    },
    {
        "key": "1143",
        "name": "Maharajpur",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1144",
        "name": "Multai",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1145",
        "name": "Mukerian",
        "state": "Punjab"
    },
    {
        "key": "1146",
        "name": "Sirsi",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1147",
        "name": "Purwa",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1148",
        "name": "Sheohar",
        "state": "Bihar"
    },
    {
        "key": "1149",
        "name": "Namagiripettai",
        "state": "Tamil Nadu"
    },
    {
        "key": "1150",
        "name": "Parasi",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1151",
        "name": "Lathi",
        "state": "Gujarat"
    },
    {
        "key": "1152",
        "name": "Lalganj",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1153",
        "name": "Narkhed",
        "state": "Maharashtra"
    },
    {
        "key": "1154",
        "name": "Mathabhanga",
        "state": "West Bengal"
    },
    {
        "key": "1155",
        "name": "Shendurjana",
        "state": "Maharashtra"
    },
    {
        "key": "1156",
        "name": "Peravurani",
        "state": "Tamil Nadu"
    },
    {
        "key": "1157",
        "name": "Mariani",
        "state": "Assam"
    },
    {
        "key": "1158",
        "name": "Phulpur",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1159",
        "name": "Rania",
        "state": "Haryana"
    },
    {
        "key": "1160",
        "name": "Pali",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1161",
        "name": "Pachore",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1162",
        "name": "Parangipettai",
        "state": "Tamil Nadu"
    },
    {
        "key": "1163",
        "name": "Pudupattinam",
        "state": "Tamil Nadu"
    },
    {
        "key": "1164",
        "name": "Panniyannur",
        "state": "Kerala"
    },
    {
        "key": "1165",
        "name": "Maharajganj",
        "state": "Bihar"
    },
    {
        "key": "1166",
        "name": "Rau",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1167",
        "name": "Monoharpur",
        "state": "West Bengal"
    },
    {
        "key": "1168",
        "name": "Mandawa",
        "state": "Rajasthan"
    },
    {
        "key": "1169",
        "name": "Marigaon",
        "state": "Assam"
    },
    {
        "key": "1170",
        "name": "Pallikonda",
        "state": "Tamil Nadu"
    },
    {
        "key": "1171",
        "name": "Pindwara",
        "state": "Rajasthan"
    },
    {
        "key": "1172",
        "name": "Shishgarh",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1173",
        "name": "Patur",
        "state": "Maharashtra"
    },
    {
        "key": "1174",
        "name": "Mayang Imphal",
        "state": "Manipur"
    },
    {
        "key": "1175",
        "name": "Mhowgaon",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1176",
        "name": "Guruvayoor",
        "state": "Kerala"
    },
    {
        "key": "1177",
        "name": "Mhaswad",
        "state": "Maharashtra"
    },
    {
        "key": "1178",
        "name": "Sahawar",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1179",
        "name": "Sivagiri",
        "state": "Tamil Nadu"
    },
    {
        "key": "1180",
        "name": "Mundargi",
        "state": "Karnataka"
    },
    {
        "key": "1181",
        "name": "Punjaipugalur",
        "state": "Tamil Nadu"
    },
    {
        "key": "1182",
        "name": "Kailasahar",
        "state": "Tripura"
    },
    {
        "key": "1183",
        "name": "Samthar",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1184",
        "name": "Sakti",
        "state": "Chhattisgarh"
    },
    {
        "key": "1185",
        "name": "Sadalagi",
        "state": "Karnataka"
    },
    {
        "key": "1186",
        "name": "Silao",
        "state": "Bihar"
    },
    {
        "key": "1187",
        "name": "Mandalgarh",
        "state": "Rajasthan"
    },
    {
        "key": "1188",
        "name": "Loha",
        "state": "Maharashtra"
    },
    {
        "key": "1189",
        "name": "Pukhrayan",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1190",
        "name": "Padmanabhapuram",
        "state": "Tamil Nadu"
    },
    {
        "key": "1191",
        "name": "Belonia",
        "state": "Tripura"
    },
    {
        "key": "1192",
        "name": "Saiha",
        "state": "Mizoram"
    },
    {
        "key": "1193",
        "name": "Srirampore",
        "state": "West Bengal"
    },
    {
        "key": "1194",
        "name": "Talwara",
        "state": "Punjab"
    },
    {
        "key": "1195",
        "name": "Puthuppally",
        "state": "Kerala"
    },
    {
        "key": "1196",
        "name": "Khowai",
        "state": "Tripura"
    },
    {
        "key": "1197",
        "name": "Vijaypur",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1198",
        "name": "Takhatgarh",
        "state": "Rajasthan"
    },
    {
        "key": "1199",
        "name": "Thirupuvanam",
        "state": "Tamil Nadu"
    },
    {
        "key": "1200",
        "name": "Adra",
        "state": "West Bengal"
    },
    {
        "key": "1201",
        "name": "Piriyapatna",
        "state": "Karnataka"
    },
    {
        "key": "1202",
        "name": "Obra",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1203",
        "name": "Adalaj",
        "state": "Gujarat"
    },
    {
        "key": "1204",
        "name": "Nandgaon",
        "state": "Maharashtra"
    },
    {
        "key": "1205",
        "name": "Barh",
        "state": "Bihar"
    },
    {
        "key": "1206",
        "name": "Chhapra",
        "state": "Gujarat"
    },
    {
        "key": "1207",
        "name": "Panamattom",
        "state": "Kerala"
    },
    {
        "key": "1208",
        "name": "Niwai",
        "state": "Uttar Pradesh"
    },
    {
        "key": "1209",
        "name": "Bageshwar",
        "state": "Uttarakhand"
    },
    {
        "key": "1210",
        "name": "Tarbha",
        "state": "Odisha"
    },
    {
        "key": "1211",
        "name": "Adyar",
        "state": "Karnataka"
    },
    {
        "key": "1212",
        "name": "Narsinghgarh",
        "state": "Madhya Pradesh"
    },
    {
        "key": "1213",
        "name": "Warud",
        "state": "Maharashtra"
    },
    {
        "key": "1214",
        "name": "Asarganj",
        "state": "Bihar"
    },
    {
        "key": "1215",
        "name": "Sarsod",
        "state": "Haryana"
    },
    {
        "key": "1216",
        "name": "Gandhinagar",
        "state": "Gujarat"
    },
    {
        "key":"1217",
        "name":"Kullu",
        "state":"Himachal Pradesh"
    },
    {
        "key":"1218",
        "name":"Manali",
        "state":"Himachal Praddesh"
    },
    {
        "key":"1219",
        "name":"Mirzapur",
        "state":"Uttar Pradesh"
    }
];

export default statesAndCities;