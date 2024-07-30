src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.17.0/xlsx.full.min.js"

function exportTableToExcel(tableID, filename = ''){
    let dataType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let tableSelect = document.getElementById(tableID);
    let tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    let workbook = XLSX.utils.table_to_book(tableSelect, {sheet: "Sheet1"});
    let workbookOut = XLSX.write(workbook, {bookType: 'xlsx', type: 'binary'});

    function s2ab(s) {
        let buf = new ArrayBuffer(s.length);
        let view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }

    let blob = new Blob([s2ab(workbookOut)], {type: dataType});

    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename ? filename + '.xlsx' : 'excel_data.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
