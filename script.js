document.getElementById("serverCount").addEventListener("change", function () {
  const count = parseInt(this.value);
  const serverDetails = document.getElementById("serverDetails");
  serverDetails.innerHTML = "";
  if (count === 1) {
    serverDetails.innerHTML +=
      '<div class="flex-row"><label><span class="required"> WAS IP </span> <input class="input-field" type="text" name="wasIP"></label><label><span class="required">' +
      'WAS PORT </span> <input class="input-field" type="text" name="wasPort"></label></div>';
  } else {
    serverDetails.innerHTML +=
      '<div class="flex-row"><label><span class="required"> LB IP </span> <input class="input-field" type="text" name="lbIP"></label>' +
      '<label><span class="required"> LB PORT </span>  <input class="input-field" type="text" name="lbPort"></label></div>';
    for (let i = 1; i <= count; i++) {
      serverDetails.innerHTML +=
        `<div class="flex-row"><label><span class="required"> WAS #${i} IP   </span>  <input class="input-field" type="text" name="wasIP${i}"></label>` +
        `<label><span class="required"> WAS #${i} Port </span>  <input class="input-field" type="text" name="wasPort${i}"></label></div>`;
    }
  }
});

document.getElementById("dbCount").addEventListener("change", function () {
  const count = parseInt(this.value);
  const dbDetails = document.getElementById("dbDetails");
  dbDetails.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    dbDetails.innerHTML +=
      `<div class="flex-row"><label><span class="required">DB #${i} IP </span>  <input class="input-field"type="text" name="dbIP${i}"></label>` +
      `<label><span class="required"> DB #${i} Port  </span>  <input class="input-field"type="text" name="dbPort${i}"></label></div>`;
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
