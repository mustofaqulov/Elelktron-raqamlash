import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { InputOrg } from "../../components/Inputs/InputOrg/InputOrg";
import Plus from "../../assets/icon/user-add.svg?react";
import Search from "../../assets/icon/search.svg?react";

import "./Search.scss";

export function SearchPage() {
  const [page, stePage] = React.useState(1);

  const data = [
    "#id",
    "Fuqaro",
    "Phone",
    "Yashash manzili",
    "Kadastr",
    "Oila soni",
    "Chet davlat",
    "Uy raqami",
  ];

  const divisions = [
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
    {
      id: "299-454545",
      fuqaro: "Abu Bin Ishtiyak",
      phone: "+811 847-4958",
      address: "Uzbekiston mahallasi",
      kadastr: "Bor",
      oila: "5",
      chet: "0",
      uy: "5",
    },
  ];

  let handleChange = (e, p) => {
    console.log(e, p);
    stePage(p);
  };

  return (
    <>
      <Header
        user={
          <Link to={"/adduser"}>
            <Button
              btnClass="secondary"
              text="Fuqaro qo'shish"
              icons={<Plus />}
            />
          </Link>
        }
      />
      <div className="search-page container">
        <div className="search-data">
          <p>Fuqorani bazadan izlang</p>
          <h1>Fuqorolarni elektiron raqamlashtirish tizimidan izlash</h1>
          <div className="inp">
            <InputOrg
              type={"text"}
              style={{
                border: "none",
                borderBottom: "1px solid #cccccc",
                borderRadius: "0",
              }}
              placeholder={"Izlash"}
              icon={<Search />}
            />
          </div>
        </div>
        <div className="divisions">
          <table>
            <thead>
              <tr className="tr">
                {data.map((i, ind) => (
                  <th key={ind}>{i}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {divisions
                .slice((page - 1) * 10, page * 10)
                .map((division, index) => (
                  <tr key={index}>
                    <td>{division.id}</td>
                    <td>{division.fuqaro}</td>
                    <td>{division.phone}</td>
                    <td>{division.address}</td>
                    <td>{division.kadastr}</td>
                    <td>{division.oila}</td>
                    <td>{division.chet}</td>
                    <td>{division.uy}</td>
                    <td>
                      <Link to={"/moreinfo"}>
                        <Button btnClass="secondary" text="Batafsil" />
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="pagination">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(divisions.length / 10)}
                color="primary"
                onChange={handleChange}
              />
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}
