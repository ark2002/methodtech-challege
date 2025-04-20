import { useEffect, useState } from "react";
import Papa from "papaparse";

const useCsvData = (filePath: string) => {
    const [data, setData] = useState<unknown[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCsv = async () => {
            try {
                const response = await fetch(filePath);
                const text = await response.text();

                const result = Papa.parse(text, {
                    header: true,
                    skipEmptyLines: true,
                });

                setData(result.data);
            } catch (err) {
                console.error("Failed to load CSV:", err);
            } finally {
                setLoading(false);
            }
        };

        loadCsv();
    }, [filePath]);

    return { data, loading };
};

export default useCsvData;
