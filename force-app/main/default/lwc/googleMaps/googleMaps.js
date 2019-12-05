import { LightningElement, api } from "lwc";

export default class GoogleMaps extends LightningElement {
  @api label;
  @api address;
  @api city;
  @api state;
  @api zip;

  openGoogleMaps() {
    let googleUrl = "https://www.google.com/maps/search/?api=1&query=";
    googleUrl += this.address ? this.address + ", " : "";
    googleUrl += this.city ? this.city + ", " : "";
    googleUrl += this.state ? this.state + ", " : "";
    googleUrl += this.zip ? this.zip : "";

    let a = document.createElement("a");
    a.target = "_blank";
    a.href = googleUrl;
    a.click();
  }
}
