document.getElementById("serverCount").addEventListener("change", function() {
    const count = parseInt(this.value);
    const serverDetails = document.getElementById("serverDetails");
    serverDetails.innerHTML = "";

    if (count === 1) {
        serverDetails.innerHTML +=
            '<div class="flex-row"><label><span class="required"> WAS #1 IP </span><input class="input-field" type="text" name="wasIP"></label>' +
            '<label><span class="required"> WAS #1 PORT </span><input class="input-field" min="1" type="number" name="wasPort"></label></div>';
    } else {
        serverDetails.innerHTML +=
            '<div class="flex-row"><label><span class="required"> LB IP </span><input class="input-field" type="text" name="lbIP"></label>' +
            '<label><span class="required"> LB PORT </span><input class="input-field" type="number" name="lbPort"></label></div>' +
            '<label><span class="required">세션 클러스터링</span>' +
            '<select name="sessionClustering" id="sessionClustering" class="input-field">' +
            '<option value="no">사용 안함</option>' +
            '<option value="yes">사용</option>' +
            "</select></label>";

        for (let i = 1; i <= count; i++) {
            serverDetails.innerHTML +=
                `<div class="flex-row"><label><span class="required"> WAS #${i} IP </span><input class="input-field" type="text" name="wasIP${i}"></label>` +
                `<label><span class="required"> WAS #${i} PORT </span><input class="input-field" min="1" type="number" name="wasPort${i}"></label>` +
                `<label><span class="required"> 세션 클러스터링 PORT </span>` +
                `<input class="input-field" type="number" min="1" name="sessionClusteringPort${i}"></label></div>`;
        }

        // Event listener for session clustering checkbox
        document.getElementById("sessionClustering").addEventListener("change", function() {
            const useClustering = this.value === "yes";
            for (let i = 1; i <= count; i++) {
                const sessionPortInput = document.querySelector(`[name='sessionClusteringPort${i}']`);
                if (useClustering) {
                    sessionPortInput.disabled = false; // Enable input
                } else {
                    sessionPortInput.disabled = true; // Disable input
                }
            }
        });

        // Initialize session clustering to 'no'
        document.getElementById("sessionClustering").dispatchEvent(new Event("change"));
    }
});
document.getElementById("dbCount").addEventListener("change", function() {
    const count = parseInt(this.value);
    const dbDetails = document.getElementById("dbDetails");
    dbDetails.innerHTML = "";
    if (count === 1) {
        dbDetails.innerHTML +=
            '<div class="flex-row"><label><span class="required"> DB #1 IP </span> <input class="input-field" type="text" name="dbIP"></label><label><span class="required">' +
            'DB #1 PORT </span><input class="input-field" type="number" min="1" name="dbPort"></label></div>';
    } else {
        dbDetails.innerHTML +=
            '<div class="flex-row"><label><span class="required"> LB IP </span> <input class="input-field" type="text" name="dbLbIP"></label>' +
            '<label><span class="required"> LB PORT </span> <input class="input-field" min="1" type="number" name="dbLbPort"></label></div>';
        dbDetails.innerHTML +=
            '<label><span class="required"> 구성 유형 </span>' +
            '<select class="input-field" name="dbConfig">' +
            '<option value="active-standby">active-standby</option>' +
            '<option value="active-active">active-active</option>' +
            '<option value="active-active-standby">active-active-standby</option>' +
            '<option value="multi-active">multi-active</option>' +
            '</select></label>';

        for (let i = 1; i <= count; i++) {
            dbDetails.innerHTML +=
                `<div class="flex-row"><label><span class="required">DB #${i} IP </span> <input class="input-field" type="text" name="dbIP${i}"></label>` +
                `<label><span class="required"> DB #${i} PORT </span> <input class="input-field" type="number" min="1" name="dbPort${i}"></label>` +
                `<label><span>서버 유형</span><select class="input-field" name="dbType${i}">` +
                `<option value="active">active</option>` +
                `<option value="standby">standby</option></select></label></div>`;
        }
    }
});


document.getElementById("pcCount").addEventListener("change", function() {
    const count = parseInt(this.value);
    const pcDetails = document.getElementById("pcDetails");
    pcDetails.innerHTML = "";
    for (let i = 1; i <= count; i++) {
        pcDetails.innerHTML += `<label><span class="required"> PC #${i} IP  </span>  <input class="input-field" type="text" name="pcIP${i}"></label>`;
    }
});

function checkName() {
    // 실제 프로젝트 이름 중복 확인 로직을 구현할 위치
    alert("사용 가능한 프로젝트 이름입니다.");
    // alert("이미 존재하는 프로젝트 입니다. 불러오시겠습니까?");
}