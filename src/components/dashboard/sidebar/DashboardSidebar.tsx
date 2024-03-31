"use client";

import { Sidebar } from "flowbite-react";
import { sideBarItem } from "./sidebarMenu";

export default function DashboardSidebar() {
  return (
    <Sidebar className="h-[92vh]" aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {sideBarItem.map((item, index) => (
            <Sidebar.Item key={index} href={item.path} icon={item.icon}>
              {item.title}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
