import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

export function CustomPagination() {
  const [isActive, setIsActive] = useState(2);
  return (
    <div className="flex-1">
      <Pagination className="w-full mx-0">
        <PaginationContent className="justify-between w-full">
          <PaginationItem>
            <PaginationPrevious href="#" className="outline-1" />
          </PaginationItem>
          <div className="flex items-center gap-1">
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive
                className={`${isActive === 2 ? "bg-theme text-white" : ""}`}
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </div>
          <PaginationItem>
            <PaginationNext href="#" className={"outline-1"} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
