import React, {useState} from "react";
import PacketSelections from "./packetSelections";
import SortButton from "./sortButton";

type Props = {};

const PacketInfo = (props: Props) => {
  
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleSelectItem = (item: string) => {
        if (selectedItem !== item) 
            setSelectedItem(item); 
    };

  return (
    <div className="flex flex-col grow">
      <div className="flex w-full justify-end my-4">
        <SortButton />
      </div>
      <div className="grid gap-x-8 md:gap-x-12 gap-y-8 grid-cols-2 md:grid-cols-4">
        <PacketSelections
          title="Paket VIP"
          data="1 Tiket Mobil (maks. 2 orang) 2 Burger Senja & Fries, 2 Teh Senja, 1 Voucher Merchandise Spot dan pelayanan VIP Sesi foto"
          price="371.000"
          isSelected={selectedItem === 'Item 1'}
          onSelect={() => handleSelectItem('Item 1')}
        />
        <PacketSelections
          title="Paket VIP"
          data="1 Tiket Mobil (maks. 2 orang) 2 Burger Senja & Fries, 2 Teh Senja, 1 Voucher Merchandise Spot dan pelayanan VIP Sesi foto"
          price="371.000"
          isSelected={selectedItem === 'Item 2'}
          onSelect={() => handleSelectItem('Item 2')}
        />
        <PacketSelections
          title="Paket VIP"
          data="1 Tiket Mobil (maks. 2 orang) 2 Burger Senja & Fries, 2 Teh Senja, 1 Voucher Merchandise Spot dan pelayanan VIP Sesi foto"
          price="371.000"
          isSelected={selectedItem === 'Item 3'}
          onSelect={() => handleSelectItem('Item 3')}
        />
        <PacketSelections
          title="Paket VIP"
          data="1 Tiket Mobil (maks. 2 orang) 2 Burger Senja & Fries, 2 Teh Senja, 1 Voucher Merchandise Spot dan pelayanan VIP Sesi foto"
          price="371.000"
          isSelected={selectedItem === 'Item 4'}
          onSelect={() => handleSelectItem('Item 4')}
        />
      </div>
    </div>
  );
};

export default PacketInfo;
