document.getElementById("serverCount").addEventListener("change", function () {
  const count = parseInt(this.value);
  const serverDetails = document.getElementById("serverDetails");
  serverDetails.innerHTML = "";
  if (count === 1) {
    serverDetails.innerHTML +=
      '<label><span> WAS IP </span> <input class="input-field" type="text" name="wasIP"></label>';
    serverDetails.innerHTML +=
      '<label><span> Port </span> <input class="input-field" type="text" name="wasPort"></label>';
  } else {
    serverDetails.innerHTML +=
      '<label><span> LB IP </span> <input class="input-field" type="text" name="lbIP"></label>';
    serverDetails.innerHTML +=
      '<label><span> LB Port </span>  <input class="input-field" type="text" name="lbPort"></label>';
    for (let i = 1; i <= count; i++) {
      serverDetails.innerHTML += `<label><span> WAS #${i} IP   </span>  <input class="input-field" type="text" name="wasIP${i}"></label>`;
      serverDetails.innerHTML += `<label><span> WAS #${i} Port </span>  <input class="input-field" type="text" name="wasPort${i}"></label>`;
    }
  }
});

document.getElementById("dbCount").addEventListener("change", function () {
  const count = parseInt(this.value);
  const dbDetails = document.getElementById("dbDetails");
  dbDetails.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    dbDetails.innerHTML += `<label><span>DB #${i} IP </span>  <input class="input-field"type="text" name="dbIP${i}"></label>`;
    dbDetails.innerHTML += `<label><span> DB #${i} Port  </span>  <input class="input-field"type="text" name="dbPort${i}"></label>`;
  }
});

document.getElementById("pcCount").addEventListener("change", function () {
  const count = parseInt(this.value);
  const pcDetails = document.getElementById("pcDetails");
  pcDetails.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    pcDetails.innerHTML += `<label><span> PC #${i} IP  </span>  <input class="input-field" type="text" name="pcIP${i}"></label>`;
  }
});
function checkName() {
  // 실제 프로젝트 이름 중복 확인 로직을 구현할 위치
  alert("사용 가능한 프로젝트 이름입니다.");
}
