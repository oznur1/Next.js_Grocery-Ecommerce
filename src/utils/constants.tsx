 
 import { FaLeaf, FaShieldAlt } from "react-icons/fa";
 import { FaMoneyBill1Wave } from "react-icons/fa6";
 import { MdDescription, MdLocalShipping } from "react-icons/md";
 
 const options=[
        {
            icon:<MdLocalShipping/>,
            title:"Hızlı Teslimat",
            description:"Aynı gün teslimat",
            bgColor:"bg-blue-50",

        },
        {
             icon:<FaLeaf/>,
            title:"Taze Ürünler",
            description:"Günlük taze ürünler",
            bgColor:"bg-green-50",
        },
        {
             icon:<FaMoneyBill1Wave/>,
            title:"Uygun Fiyatlar",
            description:"Uygun Fiyatlar",
            bgColor:"bg-yellow-50",
        },
        {
             icon:<FaShieldAlt/>,
            title:"Güvenli Alışveriş",
            description:"Güvenli Alışverişr",
            bgColor:"bg-red-50",
        }
    ]

    export {options};