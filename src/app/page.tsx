"use client";
import React, { useState } from "react";
import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "../components/CustomCheckbox";

export default function Home() {
  const [groupSelected, setGroupSelected] = useState<any[]>([]); // Specify type as string[]

  return (
    <div className="flex flex-col gap-1 w-full">
      <CheckboxGroup
        label="Select employees"
        value={groupSelected}
        onChange={(value: any) => setGroupSelected(value)} // Specify type as (value: string[]) => void
        classNames={{
          base: "w-full",
        }}
      >
        <CustomCheckbox
          value="junior"
          user={{
            name: "Junior Garcia",
            avatar: "https://avatars.githubusercontent.com/u/30373425?v=4",
            username: "jrgarciadev",
            url: "https://twitter.com/jrgarciadev",
            role: "Software Developer",
            status: "Active",
          }}
          statusColor="secondary"
        />
        <CustomCheckbox
          value="johndoe"
          user={{
            name: "John Doe",
            avatar: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
            username: "johndoe",
            url: "#",
            role: "Product Designer",
            status: "Vacation",
          }}
          statusColor="warning"
        />
        <CustomCheckbox
          value="zoeylang"
          user={{
            name: "Zoey Lang",
            avatar: "https://i.pravatar.cc/300?u=a042581f4e29026704d",
            username: "zoeylang",
            url: "#",
            role: "Technical Writer",
            status: "Out of office",
          }}
          statusColor="danger"
        />
        <CustomCheckbox
          value="william"
          user={{
            name: "William Howard",
            avatar: "https://i.pravatar.cc/300?u=a048581f4e29026701d",
            username: "william",
            url: "#",
            role: "Sales Manager",
            status: "Active",
          }}
          statusColor="secondary"
        />
      </CheckboxGroup>
      <p className="mt-4 ml-1 text-default-500 capitalize">
        Selected: {groupSelected.join(", ")}
      </p>
    </div>
  );
}
