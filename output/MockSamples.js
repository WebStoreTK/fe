import { useEffect } from "react";
import enableMirageMock from "./src/commons/mock/rest";

const MockSamples = () => {
  useEffect(() => {
    enableMirageMock();

    fetch("/categories")
      .then((res) => res.json())
      .then(console.log);

    fetch("/products")
      .then((res) => res.json())
      .then(console.log);

    fetch("/coupons")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return <></>;
};

export default MockSamples;
