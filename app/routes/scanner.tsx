import { useState, useEffect } from "react"

function Scanner() {
  const [BarcodeScanner, setBarcodeScanner] = useState<any>(null);
  const [barcode, setBarcode] = useState<string>("No barcode detected.");

  useEffect(() => {
    import("react-qr-barcode-scanner").then(mod => {
      setBarcodeScanner(() => mod.default);
    });
  }, []);

  return (
    <>
      {BarcodeScanner && (
        <BarcodeScanner
          width={500}
          height={500}
          onUpdate={(result: any) => {
            if (result && !barcode) {
              setBarcode(result.getText());
            }
          }}
        />
      )}
      <p>{barcode}</p>
    </>
  )
}

export default Scanner
