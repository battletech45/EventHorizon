import React from "react";
import PacketSelections from "./packetSelections";
import SortButton from "./sortButton";

type Props = {};

const PacketInfo = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full justify-end">
        <SortButton />
      </div>
      <div className="grid gap-x-12 grid-cols-4">
        <PacketSelections
          title="Paket VIP"
          data="1 Tiket Mobil (maks. 2 orang) 2 Burger Senja & Fries, 2 Teh Senja, 1 Voucher Merchandise Spot dan pelayanan VIP Sesi foto"
          price="371.000"
        />
        <PacketSelections
          title="Paket VIP"
          data="1 Tiket Mobil (maks. 2 orang) 2 Burger Senja & Fries, 2 Teh Senja, 1 Voucher Merchandise Spot dan pelayanan VIP Sesi foto"
          price="371.000"
        />
        <PacketSelections
          title="Paket VIP"
          data="1 Tiket Mobil (maks. 2 orang) 2 Burger Senja & Fries, 2 Teh Senja, 1 Voucher Merchandise Spot dan pelayanan VIP Sesi foto"
          price="371.000"
        />
        <PacketSelections
          title="Paket VIP"
          data="1 Tiket Mobil (maks. 2 orang) 2 Burger Senja & Fries, 2 Teh Senja, 1 Voucher Merchandise Spot dan pelayanan VIP Sesi foto"
          price="371.000"
        />
      </div>
    </div>
  );
};

export default PacketInfo;
