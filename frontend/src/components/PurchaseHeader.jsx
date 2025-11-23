import React from "react";
import { Button } from "@/components/ui/button";
import { InputGroupDropdown } from "./SearchQuery";
import DropdownTab from "./DropdownTab";

const PurchaseHeader = () => {
  return (
    <div className="fixed w-full ">
      <div className="flex items-center ">
        <h2 className="text-2xl">Purchase</h2>
        <div className="flex items-center gap-1.5 ">
          <DropdownTab
            label="Orders"
            items={[
              { name: "Requests for Quotation", link: "/purchase" },
              { name: "Purchase Orders", link: "/purchase-orders" },
              { name: "Vendors", link: "/vendors" },
            ]}
          />
          <DropdownTab
            label="Products"
            items={[{ name: "Products", link: "/products" }]}
          />
          <DropdownTab
            label="Reporting"
            items={[{ name: "Purchase", link: "/purchase" }]}
          />
          {/* <DropdownTab
            label="Configuration"
            items={["Requests for Quotation", "Purchase Orders", "Vendors"]}
          /> */}
        </div>
      </div>
      <br />
      <div className="flex gap-72 left-0">
        <div className="flex items-center gap-2.5">
          <Button variant="purple">New</Button>
          <Button variant="outline">Upload</Button>
          <h3 className="text-2xl">Request for quotation</h3>
        </div>
        <div className="left-0">
          <InputGroupDropdown />
        </div>
      </div>
    </div>
  );
};

export default PurchaseHeader;
