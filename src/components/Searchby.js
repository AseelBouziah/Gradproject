import React, { Component,useState } from "react";
import { View, Text, StyleSheet, Alert,Button,Image,ScrollView,  SafeAreaView,  FlatList,  TouchableOpacity,
} from "react-native";
import { Icon } from 'react-native-elements'
import SectionedMultiSelect from 'react-native-sectioned-multi-select';



export default class Searchby extends Component {
    constructor() {
        super();
        this.state = {
          selectedItems: [],
        };
      }
      onSelectedItemsChange = (selectedItems) => {
        this.setState({ selectedItems });
      };
    render() {
        return(
            <View>
                <SectionedMultiSelect
            items={items}
            IconRenderer={Icon}
            uniqueKey="name"
            subKey="children"
            selectText="Choose some things..."
            showDropDowns={true}
            readOnlyHeadings={true}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={this.state.selectedItems}
          />
          		
            </View>
        )
    }
}



          const items = [
            // this is the parent or 'item'
            {
              name: 'Fruits',
              id: 0,
              // these are the children or 'sub items'
              children: [
                {
                  "name": "أفوكادو",
                  "size": "كوب (شرائح)",
                  "protein": "2.9",
                  "fats": "21.4",
                  "carbohydrate": "12.5",
                  "calories": "233.6"
                 },
                 {
                  "name": "أناناس",
                  "size": "كوب (قطع)",
                  "protein": "0.8",
                  "fats": "0.2",
                  "carbohydrate": "20.3",
                  "calories": "77.5"
                 },
                 {
                  "name": "البرتقال",
                  "size": "واحدة متوسطة",
                  "protein": "1.2",
                  "fats": "0.2",
                  "carbohydrate": "15.4",
                  "calories": "61.6"
                 },
                 {
                  "name": "التمر",
                  "size": "4 حبات",
                  "protein": "0.8",
                  "fats": "0.1",
                  "carbohydrate": "24",
                  "calories": "90.2"
                 },
                 {
                  "name": "التوت الأزرق",
                  "size": "كوب",
                  "protein": "1.1",
                  "fats": "0.5",
                  "carbohydrate": "21",
                  "calories": "82.6"
                 },
                 {
                  "name": "التوت الأسود",
                  "size": "كوب",
                  "protein": "2",
                  "fats": "0.7",
                  "carbohydrate": "13.8",
                  "calories": "61.9"
                 },
                 {
                  "name": "التوت البري",
                  "size": "كوب",
                  "protein": "0.4",
                  "fats": "0.1",
                  "carbohydrate": "11.6",
                  "calories": "43.7"
                 },
                 {
                  "name": "التين",
                  "size": "واحدة متوسطة",
                  "protein": "0.4",
                  "fats": "0.2",
                  "carbohydrate": "9.6",
                  "calories": "37"
                 },
                 {
                  "name": "الخوخ",
                  "size": "واحدة متوسطة",
                  "protein": "1.4",
                  "fats": "0.4",
                  "carbohydrate": "14.3",
                  "calories": "58.5"
                 },
                 {
                  "name": "الخوخ المجفف",
                  "size": "كوب(أنصاف)",
                  "protein": "5.8",
                  "fats": "1.2",
                  "carbohydrate": "98.1",
                  "calories": "382.4"
                 },
                 {
                  "name": "الشمام",
                  "size": "كوب (قطع)",
                  "protein": "1.5",
                  "fats": "0.3",
                  "carbohydrate": "14.4",
                  "calories": "60.2"
                 },
                 {
                  "name": "الكرز الحامض",
                  "size": "كوب",
                  "protein": "1",
                  "fats": "0.3",
                  "carbohydrate": "12.5",
                  "calories": "51.5"
                 },
                 {
                  "name": "الكرز الحلو",
                  "size": "كوب",
                  "protein": "1.2",
                  "fats": "0.2",
                  "carbohydrate": "18.7",
                  "calories": "73.7"
                 },
                 {
                  "name": "باباي",
                  "size": "واحدة متوسطة",
                  "protein": "1.9",
                  "fats": "0.4",
                  "carbohydrate": "29.8",
                  "calories": "118.6"
                 },
                 {
                  "name": "تفاح",
                  "size": "واحدة متوسطة",
                  "protein": "0.4",
                  "fats": "0.2",
                  "carbohydrate": "19.1",
                  "calories": "71.8"
                 },
                 {
                  "name": "تفاح مجفف",
                  "size": "شريحة",
                  "protein": "0.9",
                  "fats": "0.3",
                  "carbohydrate": "64.6",
                  "calories": "238.1"
                 },
                 {
                  "name": "تمر هندي",
                  "size": "كوب",
                  "protein": "3.4",
                  "fats": "0.7",
                  "carbohydrate": "75",
                  "calories": "286.8"
                 },
                 {
                  "name": "توت",
                  "size": "كوب",
                  "protein": "1.5",
                  "fats": "0.8",
                  "carbohydrate": "14.7",
                  "calories": "64"
                 },
                 {
                  "name": "جريب فروت",
                  "size": "نصف واحدة متوسطة",
                  "protein": "0.7",
                  "fats": "0.1",
                  "carbohydrate": "9.5",
                  "calories": "37.8"
                 },
                 {
                  "name": "جوافة",
                  "size": "واحدة متوسطة",
                  "protein": "2.3",
                  "fats": "0.9",
                  "carbohydrate": "12.9",
                  "calories": "61.2"
                 },
                 {
                  "name": "شيبس الموز",
                  "size": "ملعقتين طعام",
                  "protein": "0.6",
                  "fats": "9.4",
                  "carbohydrate": "16.4",
                  "calories": "145.3"
                 },
                 {
                  "name": "غوج",
                  "size": "واحدة متوسطة",
                  "protein": "0.5",
                  "fats": "0.2",
                  "carbohydrate": "7.5",
                  "calories": "30.4"
                 },
                 {
                  "name": "فراولة",
                  "size": "كوب",
                  "protein": "1",
                  "fats": "0.4",
                  "carbohydrate": "11.1",
                  "calories": "46.1"
                 },
                 {
                  "name": "قشر البرتقال",
                  "size": "ملعقة شاي",
                  "protein": "0.1",
                  "carbohydrate": "1.5",
                  "calories": "5.8"
                 },
                 {
                  "name": "قشر الليمون",
                  "size": "ملعقة شاي",
                  "protein": "0.1",
                  "carbohydrate": "1",
                  "calories": "2.8"
                 },
                 {
                  "name": "كمثرى",
                  "size": "واحدة متوسطة",
                  "protein": "0.6",
                  "fats": "0.2",
                  "carbohydrate": "25.7",
                  "calories": "96.3"
                 },
                 {
                  "name": "كمثرى مجفف",
                  "size": "10 أنصاف",
                  "protein": "3.3",
                  "fats": "1.1",
                  "carbohydrate": "122",
                  "calories": "458.5"
                 },
                 {
                  "name": "كيوي",
                  "size": "واحدة متوسطة",
                  "protein": "0.9",
                  "fats": "0.4",
                  "carbohydrate": "11.1",
                  "calories": "46.4"
                 },
                 {
                  "name": "ليمون",
                  "size": "واحدة متوسطة",
                  "protein": "0.6",
                  "fats": "0.2",
                  "carbohydrate": "5.4",
                  "calories": "16.8"
                 },
                 {
                  "name": "مانجو",
                  "size": "واحدة متوسطة",
                  "protein": "1.1",
                  "fats": "0.6",
                  "carbohydrate": "35.2",
                  "calories": "134.6"
                 },
                 {
                  "name": "مشمش",
                  "size": "3 حبات",
                  "protein": "1.5",
                  "fats": "0.4",
                  "carbohydrate": "11.7",
                  "calories": "50.4"
                 },
                 {
                  "name": "مشمش مجفف",
                  "size": "كوب (أنصاف)",
                  "protein": "2.2",
                  "fats": "0.3",
                  "carbohydrate": "40.7",
                  "calories": "156.6"
                 },
                 {
                  "name": "موز",
                  "size": "واحدة متوسطة",
                  "protein": "1.3",
                  "fats": "0.4",
                  "carbohydrate": "27",
                  "calories": "105"
                 },
                 {
                  "name": "نكتارين",
                  "size": "واحدة متوسطة",
                  "protein": "1.4",
                  "fats": "0.4",
                  "carbohydrate": "14.3",
                  "calories": "59.8"
                 }
              ],
            },
            
            {
              name: 'Vegetables',
              id: 1,
              // these are the children or 'sub items'
              children: [
                {
                    "name": "البازلا الخضراء",
                    "size": "كوب",
                    "protein": "8.6",
                    "fats": "0.4",
                    "carbohydrate": "25",
                    "calories": "134.4"
                   },
                   {
                    "name": "البطاطا الحلوة",
                    "size": "واحدة متوسطة",
                    "protein": "2",
                    "fats": "0.1",
                    "carbohydrate": "26.2",
                    "calories": "111.8"
                   },
                   {
                    "name": "البقدونس",
                    "size": "10 أغصان",
                    "protein": "0.3",
                    "fats": "0.1",
                    "carbohydrate": "0.6",
                    "calories": "3.6"
                   },
                   {
                    "name": "الترمس",
                    "size": "كوب",
                    "protein": "25.8",
                    "fats": "4.8",
                    "carbohydrate": "16.4",
                    "calories": "197.5"
                   },
                   {
                    "name": "الجرجير",
                    "size": "كوب",
                    "protein": "0.8",
                    "carbohydrate": "0.4",
                    "calories": "3.7"
                   },
                   {
                    "name": "الرجلة",
                    "size": "كوب",
                    "protein": "0.6",
                    "carbohydrate": "1.5",
                    "calories": "6.9"
                   },
                   {
                    "name": "السبانخ",
                    "size": "كوب",
                    "protein": "0.9",
                    "fats": "0.1",
                    "carbohydrate": "1.1",
                    "calories": "6.9"
                   },
                   {
                    "name": "الفاصوليا السوداء",
                    "size": "كوب",
                    "protein": "14.5",
                    "fats": "4.2",
                    "carbohydrate": "45",
                    "calories": "269"
                   },
                   {
                    "name": "الفاصولياء",
                    "size": "كوب",
                    "protein": "15.3",
                    "fats": "0.9",
                    "carbohydrate": "40.4",
                    "calories": "224.8"
                   },
                   {
                    "name": "الفاصولياء الخضراء",
                    "size": "كوب",
                    "protein": "2",
                    "fats": "0.1",
                    "carbohydrate": "7.8",
                    "calories": "34.1"
                   },
                   {
                    "name": "الفجل الأحمر",
                    "size": "شرائح (نصف كوب)",
                    "protein": "0.4",
                    "fats": "0.1",
                    "carbohydrate": "2",
                    "calories": "9.3"
                   },
                   {
                    "name": "القرنبيط",
                    "size": "كوب",
                    "protein": "2",
                    "fats": "0.1",
                    "carbohydrate": "5.3",
                    "calories": "25"
                   },
                   {
                    "name": "الكراث (البقل)",
                    "size": "4 ملاعق صغيرة",
                    "protein": "1",
                    "carbohydrate": "6.7",
                    "calories": "28.8"
                   },
                   {
                    "name": "الكزبرة",
                    "size": "9 أغصان",
                    "protein": "0.4",
                    "fats": "0.1",
                    "carbohydrate": "0.7",
                    "calories": "4.6"
                   },
                   {
                    "name": "اللفت",
                    "size": "كوب مقطع شرائح",
                    "protein": "2.2",
                    "fats": "0.5",
                    "carbohydrate": "6.7",
                    "calories": "33.5"
                   },
                   {
                    "name": "باذنجان",
                    "size": "نصف كوب",
                    "protein": "0.84",
                    "fats": "0.15",
                    "carbohydrate": "4.98",
                    "calories": "21.32"
                   },
                   {
                    "name": "بازلاء مثلجة",
                    "size": "كوب",
                    "protein": "1.8",
                    "fats": "0.1",
                    "carbohydrate": "4.8",
                    "calories": "26.5"
                   },
                   {
                    "name": "بامية",
                    "size": "كوب",
                    "protein": "2",
                    "fats": "0.1",
                    "carbohydrate": "7",
                    "calories": "31"
                   },
                   {
                    "name": "بروكولي",
                    "size": "كوب",
                    "protein": "2.6",
                    "fats": "0.3",
                    "carbohydrate": "6",
                    "calories": "30.9"
                   },
                   {
                    "name": "بصل",
                    "size": "كوب (مفروم)",
                    "protein": "1.8",
                    "fats": "0.2",
                    "carbohydrate": "14.9",
                    "calories": "64"
                   },
                   {
                    "name": "بطاطس",
                    "size": "واحدة متوسطة",
                    "protein": "4.3",
                    "fats": "0.2",
                    "carbohydrate": "37.2",
                    "calories": "164"
                   },
                   {
                    "name": "بوبر",
                    "size": "كوب",
                    "protein": "0.3",
                    "carbohydrate": "1.1",
                    "calories": "5"
                   },
                   {
                    "name": "تبولة",
                    "size": "ملعقتين طعام",
                    "protein": "1",
                    "fats": "2",
                    "carbohydrate": "2",
                    "calories": "30"
                   },
                   {
                    "name": "ثوم",
                    "size": "3 فصوص",
                    "protein": "0.6",
                    "carbohydrate": "3",
                    "calories": "13.4"
                   },
                   {
                    "name": "جزر",
                    "size": "واحدة",
                    "protein": "0.7",
                    "fats": "0.2",
                    "carbohydrate": "6.9",
                    "calories": "29.5"
                   },
                   {
                    "name": "جزر صغير",
                    "size": "واحدة متوسطة",
                    "protein": "0.1",
                    "carbohydrate": "0.8",
                    "calories": "3.5"
                   },
                   {
                    "name": "حمص",
                    "size": "ملعقة طعام",
                    "protein": "1.1",
                    "fats": "1.3",
                    "carbohydrate": "2",
                    "calories": "23.2"
                   },
                   {
                    "name": "خيار",
                    "size": "حبة كبيرة",
                    "protein": "2",
                    "fats": "0.3",
                    "carbohydrate": "10.9",
                    "calories": "45.2"
                   },
                   {
                    "name": "خيار مخلل حامض",
                    "size": "شريحة واحدة",
                    "protein": "0.02",
                    "fats": "0.01",
                    "carbohydrate": "0.16",
                    "calories": "0.77"
                   },
                   {
                    "name": "ذرة طازج",
                    "size": "نصف كوب",
                    "protein": "3.68",
                    "fats": "1.02",
                    "carbohydrate": "39.07",
                    "calories": "176.4"
                   },
                   {
                    "name": "ذرة محلى ومعلب",
                    "size": "كوب واحد",
                    "protein": "4.3",
                    "fats": "1.64",
                    "carbohydrate": "30.49",
                    "calories": "132.84"
                   },
                   {
                    "name": "زيتون معلب",
                    "size": "حبة واحدة",
                    "protein": "0.08",
                    "fats": "0.57",
                    "carbohydrate": "0.47",
                    "calories": "6.72"
                   },
                   {
                    "name": "سلطة خضراوات",
                    "size": "كوب",
                    "protein": "0.93",
                    "fats": "1.86",
                    "carbohydrate": "4.51",
                    "calories": "39.59"
                   },
                   {
                    "name": "شمندر",
                    "size": "شرائح (نصف كوب)",
                    "protein": "1.1",
                    "fats": "0.1",
                    "carbohydrate": "6.5",
                    "calories": "29.2"
                   },
                   {
                    "name": "طعمية",
                    "size": "حبة واحدة",
                    "protein": "2.3",
                    "fats": "3",
                    "carbohydrate": "5.4",
                    "calories": "56.6"
                   },
                   {
                    "name": "طماطم",
                    "size": "واحدة متوسطة",
                    "protein": "1.1",
                    "fats": "0.2",
                    "carbohydrate": "4.8",
                    "calories": "22.1"
                   },
                   {
                    "name": "عدس",
                    "size": "كوب",
                    "protein": "17.9",
                    "fats": "0.8",
                    "carbohydrate": "39.9",
                    "calories": "229.7"
                   },
                   {
                    "name": "فاصوليا بيضاء",
                    "size": "كوب",
                    "protein": "17.4",
                    "fats": "0.6",
                    "carbohydrate": "44.9",
                    "calories": "248.8"
                   },
                   {
                    "name": "فاصولياء صفراء",
                    "size": "كوب",
                    "protein": "16.2",
                    "fats": "1.9",
                    "carbohydrate": "44.7",
                    "calories": "254.9"
                   },
                   {
                    "name": "فلفل أحمر حار",
                    "size": "حبة واحدة",
                    "protein": "0.8",
                    "fats": "0.2",
                    "carbohydrate": "4",
                    "calories": "18"
                   },
                   {
                    "name": "فلفل أخضر حار",
                    "size": "حبة واحدة",
                    "protein": "0.9",
                    "fats": "0.1",
                    "carbohydrate": "4.3",
                    "calories": "18"
                   },
                   {
                    "name": "فول الصويا",
                    "size": "كوب",
                    "protein": "28.6",
                    "fats": "15.4",
                    "carbohydrate": "17.1",
                    "calories": "297.6"
                   },
                   {
                    "name": "قلقاس",
                    "size": "كوب",
                    "protein": "1.6",
                    "fats": "0.2",
                    "carbohydrate": "27.5",
                    "calories": "116.5"
                   },
                   {
                    "name": "كراث (بقل)",
                    "size": "صرة (كوب)",
                    "protein": "1.3",
                    "fats": "0.3",
                    "carbohydrate": "12.6",
                    "calories": "54.3"
                   },
                   {
                    "name": "كرفس",
                    "size": "حبة متوسطة الحجم",
                    "protein": "0.3",
                    "fats": "0.1",
                    "carbohydrate": "1.2",
                    "calories": "6.4"
                   },
                   {
                    "name": "مشروم",
                    "size": "شرائح (كوب)",
                    "protein": "2.2",
                    "fats": "0.2",
                    "carbohydrate": "2.3",
                    "calories": "15.4"
                   },
                   {
                    "name": "معجون طماطم",
                    "size": "168 جرام (علبة)",
                    "protein": "7.3",
                    "fats": "0.8",
                    "carbohydrate": "32.1",
                    "calories": "139.4"
                   },
                   {
                    "name": "هليون",
                    "size": "كوب",
                    "protein": "2.9",
                    "fats": "0.2",
                    "carbohydrate": "5.2",
                    "calories": "26.8"
                   },
                   {
                    "name": "ورق العنب",
                    "size": "كوب",
                    "protein": "0.8",
                    "fats": "0.3",
                    "carbohydrate": "2.4",
                    "calories": "13"
                   }
            ],
             
            },
            {
              name: 'Meats',
              id: 2,
              // these are the children or 'sub items'
              children: [
                {
                    "name": "بط مشوي بدون الجلد",
                    "size": "بحجم راحة اليد",
                    "protein": "20",
                    "fats": "9.5",
                    "carbohydrate": "0",
                    "calories": "170.8"
                   },
                   {
                    "name": "بط مشوي مع الجلد",
                    "size": "بحجم راحة اليد",
                    "protein": "16.1",
                    "fats": "24.1",
                    "carbohydrate": "0",
                    "calories": "286.4"
                   },
                   {
                    "name": "حمام",
                    "size": "بحجم الكف",
                    "protein": "21.8",
                    "fats": "3.3",
                    "carbohydrate": "0",
                    "calories": "117.8"
                   },
                   {
                    "name": "حمام بدون الجلد",
                    "size": "بحجم راحة اليد",
                    "protein": "14.9",
                    "fats": "6.4",
                    "carbohydrate": "0",
                    "calories": "120.7"
                   },
                   {
                    "name": "حمام مطبوخ",
                    "size": "بحجم راحة اليد",
                    "protein": "20.3",
                    "fats": "11",
                    "carbohydrate": "0",
                    "calories": "186.2"
                   },
                   {
                    "name": "حمام مقلي",
                    "size": "بحجم الكف",
                    "protein": "27.8",
                    "fats": "4.2",
                    "carbohydrate": "0",
                    "calories": "150"
                   },
                   {
                    "name": "دجاج",
                    "size": "بحجم راحة اليد",
                    "protein": "18.2",
                    "fats": "2.6",
                    "carbohydrate": "0",
                    "calories": "101.2"
                   },
                   {
                    "name": "دجاج معلب",
                    "size": "علبة",
                    "protein": "30.9",
                    "fats": "11.3",
                    "carbohydrate": "0",
                    "calories": "234.3"
                   },
                   {
                    "name": "ربيان",
                    "size": "5-6 حبات",
                    "protein": "19.7",
                    "fats": "0.8",
                    "carbohydrate": "0",
                    "calories": "87.1"
                   },
                   {
                    "name": "ربيان مقلي",
                    "size": "3-4 حبات متوسطة",
                    "protein": "18.17",
                    "fats": "10.43",
                    "carbohydrate": "9.74",
                    "calories": "205.71"
                   },
                   {
                    "name": "سجق",
                    "size": "قطعة واحدة",
                    "protein": "6.84",
                    "fats": "16.25",
                    "carbohydrate": "1.03",
                    "calories": "179.55"
                   },
                   {
                    "name": "سلمون معلب",
                    "size": "راحة اليد",
                    "protein": "17.4",
                    "fats": "6.21",
                    "carbohydrate": "0",
                    "calories": "130"
                   },
                   {
                    "name": "سمان مطبوخ",
                    "size": "بحجم راحة اليد",
                    "protein": "21.3",
                    "fats": "12",
                    "carbohydrate": "0",
                    "calories": "198.9"
                   },
                   {
                    "name": "سمك الحمراء",
                    "size": "راحة اليد",
                    "protein": "22.37",
                    "fats": "1.45",
                    "carbohydrate": "0",
                    "calories": "108.81"
                   },
                   {
                    "name": "سمك تونا معلب",
                    "size": "راحة اليد",
                    "protein": "21.68",
                    "fats": "0.69",
                    "carbohydrate": "0",
                    "calories": "98.61"
                   },
                   {
                    "name": "شعري",
                    "size": "بحجم الكف",
                    "protein": "19.7",
                    "fats": "1.1",
                    "carbohydrate": "0",
                    "calories": "89.8"
                   },
                   {
                    "name": "شعري مقلي",
                    "size": "بحجم الكف",
                    "protein": "25.9",
                    "fats": "7",
                    "carbohydrate": "0",
                    "calories": "167"
                   },
                   {
                    "name": "صافي",
                    "size": "بحجم الكف",
                    "protein": "18.9",
                    "fats": "7.3",
                    "carbohydrate": "0.1",
                    "calories": "141.8"
                   },
                   {
                    "name": "صافي مشوي",
                    "size": "بحجم الكف",
                    "protein": "27.3",
                    "fats": "4.3",
                    "carbohydrate": "0",
                    "calories": "148.9"
                   },
                   {
                    "name": "صدر دجاج بروستد",
                    "size": "½ صدر دجاجة صغيرة",
                    "protein": "26.35",
                    "fats": "3",
                    "carbohydrate": "0",
                    "calories": "140.26"
                   },
                   {
                    "name": "صدر دجاج مقلي",
                    "size": "½ صدر دجاجة صغيرة",
                    "protein": "28.42",
                    "fats": "4",
                    "carbohydrate": "0.42",
                    "calories": "158.94"
                   },
                   {
                    "name": "فخد دجاج مقلي",
                    "size": "فخد دجاجة متوسطة",
                    "protein": "18.5",
                    "fats": "13.73",
                    "carbohydrate": "7.41",
                    "calories": "232"
                   },
                   {
                    "name": "فخذ دجاج بروستد",
                    "size": "فخد دجاجة متوسطة",
                    "protein": "22",
                    "fats": "11.45",
                    "carbohydrate": "0",
                    "calories": "197.19"
                   },
                   {
                    "name": "قرقفان",
                    "size": "بحجم الكف",
                    "protein": "19.9",
                    "fats": "3.7",
                    "carbohydrate": "0.4",
                    "calories": "115"
                   },
                   {
                    "name": "قرقفان مشوي",
                    "size": "بحجم الكف",
                    "protein": "22.8",
                    "fats": "1.8",
                    "carbohydrate": "0",
                    "calories": "108.6"
                   },
                   {
                    "name": "كبد دجاج",
                    "size": "3 قطع متوسطة",
                    "protein": "20.72",
                    "fats": "4.65",
                    "carbohydrate": "0.75",
                    "calories": "133.5"
                   },
                   {
                    "name": "كبدة لحم مطبوخة",
                    "size": "4 قطع متوسطة",
                    "protein": "22.73",
                    "fats": "6.81",
                    "carbohydrate": "6.67",
                    "calories": "184.45"
                   },
                   {
                    "name": "كنعد",
                    "size": "بحجم الكف",
                    "protein": "19.5",
                    "fats": "9.3",
                    "carbohydrate": "0",
                    "calories": "161"
                   },
                   {
                    "name": "كنعد مقلي",
                    "size": "بحجم الكف",
                    "protein": "26.7",
                    "fats": "11.9",
                    "carbohydrate": "0",
                    "calories": "213.7"
                   },
                   {
                    "name": "لحم بقر مسلوق (مطحون)",
                    "size": "ملعقتين طعام",
                    "protein": "20.45",
                    "fats": "17.6",
                    "carbohydrate": "0",
                    "calories": "245.65"
                   },
                   {
                    "name": "لحم بقر مقلي (مطحون)",
                    "size": "ملعقتين طعام",
                    "protein": "20.33",
                    "fats": "19.2",
                    "carbohydrate": "0",
                    "calories": "260"
                   },
                   {
                    "name": "لحم عجل مطبوخ",
                    "size": "3 قطع صغيرة",
                    "protein": "23.99",
                    "fats": "8",
                    "carbohydrate": "0",
                    "calories": "175"
                   },
                   {
                    "name": "ميد",
                    "size": "بحجم الكف",
                    "protein": "18.3",
                    "fats": "16.1",
                    "carbohydrate": "0",
                    "calories": "216.7"
                   },
                   {
                    "name": "ميد مشوي",
                    "size": "بحجم الكف",
                    "protein": "24.2",
                    "fats": "10.5",
                    "carbohydrate": "0",
                    "calories": "191.2"
                   },
                   {
                    "name": "هامور",
                    "size": "بحجم الكف",
                    "protein": "19.3",
                    "fats": "3.4",
                    "carbohydrate": "0.2",
                    "calories": "109.3"
                   },
                   {
                    "name": "هامور مع الرز",
                    "size": "نصف كوب",
                    "protein": "27.3",
                    "fats": "3.2",
                    "carbohydrate": "0",
                    "calories": "139.2"
                   },
                   {
                    "name": "ينم",
                    "size": "بحجم الكف",
                    "protein": "17.9",
                    "fats": "10.4",
                    "carbohydrate": "0",
                    "calories": "164.7"
                   },
                   {
                    "name": "ينم مشوي",
                    "size": "بحجم الكف",
                    "protein": "25.9",
                    "fats": "5.6",
                    "carbohydrate": "0",
                    "calories": "154.8"
                   }
                  
            ],
            }
          
          ];