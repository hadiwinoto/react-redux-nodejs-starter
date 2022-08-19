/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const BoardDatabase = () => {

  let array = [
    {
      "id": 1,
      "nama": "Apartment Green Pramuka",
      "alamat": "JL. Pramuka No 123"
    },
    {
      "id": 2,
      "nama": "Apartment Green Residence",
      "alamat": "JL. Pramuka No 123"
    },
    {
      "id": 3,
      "nama": "Apartment PIK 2",
      "alamat": "JL. Pramuka No 123"
    },
    {
      "id": 4,
      "nama": "Apartment Kelapa Gading",
      "alamat": "JL. Pramuka No 123"
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
              <div>
                  <label> Nama </label>
                  <input className="form-control"></input>
              </div>
              <div>
                  <label> Tahun Pengembangan</label>
                  <select className="form-control">
                      <option></option>
                      <option>2022</option>
                      <option>2021</option>
                      <option>2020</option>
                  </select>
              </div>
              
          </div>
        </div>
      
        <div className="col-md-9">

          <span> 4 Data Apartment di Temukan </span>
      
          {array.map((data, i) => {
            return <div key={i} className="card">
              <div className="d-flex position-relative">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oeF1iVoV7SD8rRpyaONF-QHaE6%26pid%3DApi&f=1"
                  className="flex-shrink-0 me-3"
                  style={{ maxWidth: "12rem" }}
                  alt="..."
                />
                <div>
                  <h6 className="mt-0">
                    {data.nama}
                  </h6>
                  <p>{data.alamat}</p>
                  <a className="stretched-link">Detail</a>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default BoardDatabase;
