$(document).ready(function() {
    showRequests(requests);
})

function showRequests(requests) {
    let table = $("#data tbody");
    table.html("");
    for (request of requests) {
        table.append(`
            <tr>
                <td>${request.receiverID}</td>
                <td>${request.name}</td>
                <td class="fulfill">Fulfill Request</td>
            </tr>
        `);
    }
}

var requests = [
    { receiverID:"12345", name:"We need food pls" },
    { receiverID:"8372", name:"Clothing and toiletries" },
    { receiverID:"912837", name:"Anything helps" }
]