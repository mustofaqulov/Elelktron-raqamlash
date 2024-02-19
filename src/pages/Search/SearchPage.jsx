import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { InputOrg } from "../../components/Inputs/InputOrg/InputOrg";
import { data } from "../../JSON/data";
import Plus from "../../assets/icon/add.svg?react";
import Search from "../../assets/icon/search.svg?react";

import "./Search.scss";

export function SearchPage() {
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState("");

  const datas = [
    "#id",
    "Fuqaro",
    "Phone",
    "Yashash manzili",
    "Kadastr",
    "Oila soni",
    "Chet davlat",
    "Uy raqami",
  ];

  let handleChange = (e, p) => {
    setPage(p);
  };

  let handleClick = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter((item) => {
    return search.toLowerCase() === ""
      ? null
      : item.id.toLowerCase().includes(search);
  });

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
          <p>Fuqaroni bazadan izlang</p>
          <h1>Fuqarolarni elektron raqamlashtirish tizimidan izlash</h1>
          <div className="inp">
            <InputOrg
              type={"text"}
              change={(e) => handleClick(e)}
              style={{
                border: " none",
                background: "white",
                // boxShadow: "0px 0px 40px 0.2px #43434331",
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
                {datas.map((i, ind) => (
                  <th key={ind}>{i}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData
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
            {filteredData.length > 10 && (
              <Stack spacing={2}>
                <Pagination
                  count={Math.ceil(filteredData.length / 10)}
                  color="primary"
                  onChange={handleChange}
                />
              </Stack>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
