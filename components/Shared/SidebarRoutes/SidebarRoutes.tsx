"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BarChart, DoorClosed, House, RectangleEllipsis } from "lucide-react";
import Link from "next/link";
import { SingleItem } from "../SingleItem";
import {
  dataSidebarElements,
  dataSidebarConfiguration,
} from "./SidebarRoutes.data";
import { signOut } from "next-auth/react";
export function SidebarRoutes() {
  return (
    <div>
      <SingleItem label="Homepage" icon={House} href="/" />

      {dataSidebarElements.map(({ title, icon: Icon, children }) => (
        <Accordion
          key={title}
          type="single"
          collapsible
          className="px-2 w-full"
        >
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100/20 p-2 rounded-md">
                  <Icon size={20} />
                </div>
                {title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {children.map(({ item, href, icon: Icon }) => (
                <div key={item}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 hover:bg-blue-100/20 px-6 py-2 transition-all duration-300"
                  >
                    <Icon size={20} />
                    {item}
                  </Link>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      <SingleItem
        label="Generator"
        icon={RectangleEllipsis}
        href="/generator"
      />

      {dataSidebarConfiguration.map(({ title, icon: Icon, children }) => (
        <Accordion
          key={title}
          type="single"
          collapsible
          className="px-2 w-full"
        >
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100/20 p-2 rounded-md">
                  <Icon size={20} />
                </div>
                {title}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {children.map(({ item, href, icon: Icon, premium }) => (
                <div
                  key={item}
                  className="flex justify-between items-center hover:bg-blue-100/20 mt-2 pr-1 rounded-md transition-all duration-300"
                >
                  <Link
                    href={href}
                    className="flex items-center gap-2 px-6 py-2"
                  >
                    <Icon size={20} />
                    {item}
                  </Link>
                  {premium && (
                    <span className="flex gap-2 bg-blue-400 px-2 py-1 rounded-md text-xs">
                      Premium
                    </span>
                  )}
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      <SingleItem href="/analytics" icon={BarChart} label="Analíticas" />

      <SingleItem
        onClick={() => signOut()}
        href="#"
        icon={DoorClosed}
        label="Close sesion"
      />
    </div>
  );
}
