import { Header } from "../components/Header";
import { Table } from "../components/Table";
import { VerifyFilter } from "../components/VerifyFilter";

export const TablePage = () =>{
      return (
        <div className="flex flex-col items-center">
          <Header />
          <VerifyFilter />
          <Table />
        </div>
      );
}