import * as React from "react";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { InputOrg } from "../../components/Inputs/InputOrg/InputOrg";
// import TablePagination from "@mui/material/TablePagination";
import Plus from "../../assets/icon/user-add.svg?react";
import Search from "../../assets/icon/search.svg?react";

import "./Search.scss";

export function SearchPage() {
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
  ];

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

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
          {divisions.map((item, index) => {
            <div className="division" key={index}>
              <p>{item.id}</p>
              <p>{item.fuqaro}</p>
              <p>{item.phone}</p>
              <p>{item.address}</p>
              <p>{item.kadastr}</p>
              <p>{item.oila}</p>
              <p>{item.chet}</p>
              <p>{item.uy}</p>
            </div>;
          })}
        </div>
      </div>
    </>
  );
}
