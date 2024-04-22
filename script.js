document.getElementById("serverCount").addEventListener("change", function () {
  const count = parseInt(this.value);
  const serverDetails = document.getElementById("serverDetails");
  serverDetails.innerHTML = ""; // Clear previous details

  if (count === 1) {
    serverDetails.innerHTML +=
      '<div class="flex-row"><label><span class="required"> WAS IP </span><input class="input-field" type="text" name="wasIP"></label>' +
      '<label><span class="required"> WAS PORT </span><input class="input-field" type="number" name="wasPort"></label></div>';
  } else {
    serverDetails.innerHTML +=
      '<div class="flex-row"><label><span class="required"> LB IP </span><input class="input-field" type="text" name="lbIP"></label>' +
      '<label><span class="required"> LB PORT </span><input class="input-field" type="text" name="lbPort"></label></div>' +
      '<label><span class="required">세션 클러스터링</span>' +
      '<select name="sessionClustering" id="sessionClustering" class="input-field">' +
      '<option value="no">사용 안함</option>' +
      '<option value="yes">사용</option>' +
      "</select></label>";

    for (let i = 1; i <= count; i++) {
      serverDetails.innerHTML +=
        `<div class="flex-row"><label><span class="required"> WAS #${i} IP </span><input class="input-field" type="text" name="wasIP${i}"></label>` +
        `<label><span class="required"> WAS #${i} Port </span><input class="input-field" type="number" name="wasPort${i}"></label>` +
        `<span id="sessionPortContainer${i}"></span></div>`;
    }

    // Event listener for session clustering checkbox
    document
      .getElementById("sessionClustering")
      .addEventListener("change", function () {
        const useClustering = this.value === "yes";
        for (let i = 1; i <= count; i++) {
          const sessionPortContainer = document.getElementById(
            `sessionPortContainer${i}`
          );
          if (useClustering) {
            sessionPortContainer.style.display = "block";
            sessionPortContainer.innerHTML =
              `<label><span class="required"> 세션 클러스터링 포트 #${i} </span>` +
              `<input class="input-field" type="number" name="sessionClusteringPort${i}"></label>`;
          } else {
            sessionPortContainer.style.display = "none";
            sessionPortContainer.innerHTML = "";
          }
        }
      });

    // Initialize session clustering to 'no'
    document
      .getElementById("sessionClustering")
      .dispatchEvent(new Event("change"));
  }
});

document.getElementById("dbCount").addEventListener("change", function () {
  const count = parseInt(this.value);
  const dbDetails = document.getElementById("dbDetails");
  dbDetails.innerHTML = "";
  if (count === 1) {
    dbDetails.innerHTML +=
      '<div class="flex-row"><label><span class="required"> DB IP </span> <input class="input-field" type="text" name="dbIP"></label><label><span class="required">' +
      'DB PORT </span><input class="input-field" type="number" name="dbPort"></label></div>';
  } else {
    dbDetails.innerHTML +=
      '<div class="flex-row"><label><span class="required"> LB IP </span> <input class="input-field" type="text" name="dbLbIP"></label>' +
      '<label><span class="required"> LB PORT </span>  <input class="input-field" type="number" name="dbLbPort"></label></div>';
    for (let i = 1; i <= count; i++) {
      dbDetails.innerHTML +=
        `<div class="flex-row"><label><span class="required">DB #${i} IP </span>  <input class="input-field"type="text" name="dbIP${i}"></label>` +
        `<label><span class="required"> DB #${i} Port  </span>  <input class="input-field"type="number" name="dbPort${i}"></label></div>`;
    }
  }
});

document.getElementById("pcCount").addEventListener("change", function () {
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
}
