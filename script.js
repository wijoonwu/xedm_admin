document.getElementById("serverCount").addEventListener("change", function () {
  const count = parseInt(this.value);
  const serverDetails = document.getElementById("serverDetails");
  serverDetails.innerHTML = "";
  if (count === 1) {
    serverDetails.innerHTML +=
      '<label>WAS IP: <input type="text" name="wasIP"></label><br>';
    serverDetails.innerHTML +=
      '<label>Port: <input type="text" name="wasPort"></label><br>';
  } else {
    serverDetails.innerHTML +=
      '<label>LB IP: <input type="text" name="lbIP"></label><br>';
    serverDetails.innerHTML +=
      '<label>LB Port: <input type="text" name="lbPort"></label><br>';
    for (let i = 1; i <= count; i++) {
      serverDetails.innerHTML += `<label>WAS IP ${i}: <input type="text" name="wasIP${i}"></label><br>`;
      serverDetails.innerHTML += `<label>Port ${i}: <input type="text" name="wasPort${i}"></label><br>`;
    }
  }
});

document.getElementById("dbCount").addEventListener("change", function () {
  const count = parseInt(this.value);
  const dbDetails = document.getElementById("dbDetails");
  dbDetails.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    dbDetails.innerHTML += `<label>DB IP ${i}: <input type="text" name="dbIP${i}"></label><br>`;
    dbDetails.innerHTML += `<label>DB Port ${i}: <input type="text" name="dbPort${i}"></label><br>`;
  }
});

document.getElementById("pcCount").addEventListener("change", function () {
  const count = parseInt(this.value);
  const pcDetails = document.getElementById("pcDetails");
  pcDetails.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    pcDetails.innerHTML += `<label>PC IP ${i}: <input type="text" name="pcIP${i}"></label><br>`;
  }
});
function checkName() {
  // 실제 프로젝트 이름 중복 확인 로직을 구현할 위치
  alert("사용 가능한 프로젝트 이름입니다.");
}
