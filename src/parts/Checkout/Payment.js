import React from "react";
import Fade from "react-reveal/Fade";

import InputText from "elements/Form/InputText";
import InputFile from "elements/Form/InputFile";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;
  const tax = 11;
  const subTotal = ItemDetails.price * checkout.data.duration;
  const grandTotal = ((subTotal * tax) / 100) * subTotal;
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran :</p>
              <p>Tax : {tax}%</p>
              <p>Sub Total : ${subTotal}USD</p>
              <p>Grand Total : ${grandTotal}</p>
              {ItemDetails.bank.map((bank, index) => {
                return (
                  <div className="row mt-4" key={`bank-${index}`}>
                    <div className="col-3 text-right">
                      <img
                        src={`/${bank.imageUrl}`}
                        alt={`${bank.bankName}`}
                        width="60"
                      />
                    </div>
                    <div className="col">
                      <dl>
                        <dd>{bank.bankName}</dd>
                        <dd>{bank.accountNumber}</dd>
                        <dd>{bank.accountName}</dd>
                      </dl>
                    </div>
                  </div>
                );
              })}
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                id="proofPayment"
                name="proofPayment"
                accept="image/*"
                value={data.proofPayment}
                onChange={props.fieldChange}
              />

              <label htmlFor="bankFrom">Asal Bank</label>
              <InputText
                id="bankFrom"
                name="bankFrom"
                type="text"
                value={data.bankFrom}
                onChange={props.fieldChange}
              />

              <label htmlFor="accountHolder">Nama Pengirim</label>
              <InputText
                id="accountHolder"
                name="accountHolder"
                type="text"
                value={data.accountHolder}
                onChange={props.fieldChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
