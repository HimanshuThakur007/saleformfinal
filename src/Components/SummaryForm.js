import React from "react";
import "./SummaryForm.css";

const SummaryForm = () => {
  return (
    <div>
      <div className="col-8 legend_summary">
        <fieldset className="border p-2 tax">
          <legend className="float-none w-auto p-2">Tax Summary</legend>
          <div className="row legend">
            <div className="col-3 Tax">
              <label className="rate">Tax Rate</label>
            </div>
            <div className="col-5 Tax">
              <label className="Taxable">Taxable Amount</label>
            </div>
            <div className="col-4 Tax">
              <label className="igst">IGST</label>
            </div>
          </div>
          <textarea className="area"></textarea>
          <div className="row total">
            <div className="col-3 Total">
              <label className="Totals">Totals</label>
            </div>
            <div className="col-5 Tax">
              <label className="rs">0.00</label>
            </div>
            <div className="col-4 Tax">
              <label className="rst">0.00</label>
            </div>
            <div className="form-check">
  <input className="form-check-input taxsummary" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label taxsum" >
    Tax Summary
  </label>
</div>

          </div>
        </fieldset>
      
      </div>
    </div>
  );
};

export default SummaryForm;
