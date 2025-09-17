import { useState, useEffect } from "react"

function Scanner() {
  const [BarcodeScanner, setBarcodeScanner] = useState<any>(null);
  const [barcode, setBarcode] = useState<string | null>(null);

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
          onUpdate={(error: any, result: any) => {
            if (!error && result && !barcode) {
              setBarcode(result.text)
            }
          }}
        />
      )}
      <p>Barcode: {barcode ?? 'None detected.'}</p>
    </>
  )
}

export default Scanner
