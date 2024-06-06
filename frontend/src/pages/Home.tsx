import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "@/services/ProductService";
import { ColumnMeta, Product } from "@/constants/types";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[] | null>(
    null
  );

  const columns: ColumnMeta[] = [
    { field: "code", header: "Code" },
    { field: "name", header: "Name" },
    { field: "category", header: "Category" },
    { field: "quantity", header: "Quantity" },
  ];

  useEffect(() => {
    ProductService.getProductsMini().then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="flex">
        <div className="p-4 w-full">
          <DataTable
            value={products}
            selectionMode="checkbox"
            selection={selectedProducts!}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            dataKey="id"
            tableStyle={{ minWidth: "50rem" }}
            scrollHeight="400px"
            scrollable
            showGridlines
            stripedRows
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "3rem" }}
            ></Column>
            {columns.map((col, _i) => (
              <Column
                key={col.field}
                field={col.field}
                header={col.header}
                sortable
              />
            ))}
          </DataTable>
        </div>
      </div>
    </>
  );
}
