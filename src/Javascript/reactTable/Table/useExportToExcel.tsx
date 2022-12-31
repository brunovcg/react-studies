import generateExcel from "zipcelx";

export default function useExportToExcel (renderRows: any, headerGroups: any) {

    function getHeader(column: any) {
        if (column.totalHeaderCount === 1) {
            return [
                {
                    value: column.Header,
                    type: "string"
                }
            ];
        } else {
            return [
                {
                    value: column.Header,
                    type: "string"
                },
            ];
        }
    }

    function getExcel() {
        const config = {
            filename: "table-test",
            sheet: {
                data: []
            }
        };

        const dataSet: any = config.sheet.data;

        headerGroups.forEach((headerGroup: { headers: any[]; }) => {
            const headerRow: any = [];
            if (headerGroup.headers) {
                headerGroup.headers.forEach((column, index) => {
                    const rowHasData = renderRows.find((row: {values: string}) => row.values[column.id])
                    if (index && rowHasData) {
                        headerRow.push(...getHeader(column));
                    }
                });
            }

            dataSet.push(headerRow);
        });

        if (renderRows.length > 0) {
            renderRows.forEach((row: { values: { [s: string]: unknown; } | ArrayLike<unknown>; }) => {
                const dataRow: { value: unknown; type: string; }[] = [];

                Object.values(row.values).forEach(value =>
                    dataRow.push({
                        value,
                        type: typeof value === "number" ? "number" : "string"
                    })
                );

                dataSet.push(dataRow);
            });
        } else {
            dataSet.push([
                {
                    value: "No data",
                    type: "string"
                }
            ]);
        }
        return generateExcel(config);
    }
    return [getExcel]
}