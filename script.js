document.getElementById("serverCount").addEventListener("change", function () {
  const count = parseInt(this.value);
  const serverDetails = document.getElementById("serverDetails");
  serverDetails.innerHTML = "";

  if (count === 1) {
    serverDetails.innerHTML +=
      '<div class="flex-row"><label><span class="required"> WAS #1 IP </span><input class="input-field" type="text" name="wasIP"></label>' +
      '<label><span class="required"> WAS #1 Port </span><input class="input-field" min="1" type="number" name="wasPort"></label></div>';
  } else {
    serverDetails.innerHTML +=
      '<div class="flex-row"><label><span class="required"> Load balancer IP </span><input class="input-field" type="text" name="lbIP"></label>' +
      '<label><span class="required"> Load balancer Port </span><input class="input-field" type="number" min="1" name="lbPort"></label></div>' +
      '<label><span class="required">세션 클러스터링</span>' +
      '<select name="sessionClustering" id="sessionClustering" class="input-field">' +
      '<option value="no">사용 안함</option>' +
      '<option value="yes">사용</option>' +
      "</select></label>";

    for (let i = 1; i <= count; i++) {
      serverDetails.innerHTML +=
        `<div class="flex-row"><label><span class="required"> WAS #${i} IP </span><input class="input-field" type="text" name="wasIP${i}"></label>` +
        `<label><span class="required"> WAS #${i} Port </span><input class="input-field" min="1" type="number" name="wasPort${i}"></label>` +
        `<label><span class="required"> 세션 클러스터링 Port </span>` +
        `<input class="input-field" type="number" min="1" name="sessionClusteringPort${i}"></label></div>`;
    }

    document
      .getElementById("sessionClustering")
      .addEventListener("change", function () {
        const useClustering = this.value === "yes";
        for (let i = 1; i <= count; i++) {
          const sessionPortInput = document.querySelector(
            `[name='sessionClusteringPort${i}']`
          );
          if (useClustering) {
            sessionPortInput.disabled = false; // Enable input
          } else {
            sessionPortInput.disabled = true; // Disable input
            sessionPortInput.value = null;
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
      '<div class="flex-row"><label><span class="required"> DB #1 IP </span> <input class="input-field" type="text" name="dbIP"></label><label><span class="required">' +
      'DB #1 Port </span><input class="input-field" type="number" min="1" name="dbPort"></label></div>';
  } else {
    dbDetails.innerHTML +=
      '<div class="flex-row"><label><span class="required"> Load balancer IP </span> <input class="input-field" type="text" name="dbLbIP"></label>' +
      '<label><span class="required">Load balancer Port </span> <input class="input-field" min="1" type="number" name="dbLbPort"></label></div>';
    dbDetails.innerHTML +=
      '<label><span class="required"> 구성 유형 </span>' +
      '<select class="input-field" name="dbConfig" id="dbConfig">' +
      '<option value="">선택</option>' +
      '<option value="none">none</option>' +
      '<option value="active-standby">active-standby</option>' +
      '<option value="active-active">active-active</option>' +
      '<option value="active-active-standby">active-active-standby</option>' +
      '<option value="multi-active">multi-active</option>' +
      "</select></label>";

    for (let i = 1; i <= count; i++) {
      dbDetails.innerHTML +=
        `<div class="flex-row"><label><span class="required">DB #${i} IP </span> <input class="input-field" type="text" name="dbIP${i}"></label>` +
        `<label><span class="required"> DB #${i} Port </span> <input class="input-field" type="number" min="1" name="dbPort${i}"></label>` +
        `<label><span>서버 유형</span><select class="input-field" name="dbType${i}" disabled>` +
        `<option value="active">active</option>` +
        `<option value="standby">standby</option></select></label></div>`;
    }

    document.getElementById("dbConfig").addEventListener("change", function () {
      for (let i = 1; i <= count; i++) {
        const dbConfig = this.value;
        const dbType = document.querySelector(`[name='dbType${i}']`);
        if (dbConfig === "" || dbConfig === "none") {
          dbType.disabled = true;
        } else {
          dbType.disabled = false;
        }
      }
    });
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
  var projectNameInput = document.getElementsByName("projectName")[0].value;

  if (projectNameInput.trim() === "") {
    // 프로젝트 이름이 비어있는 경우
    alert("프로젝트 이름을 입력해주세요.");
  } else {
    // 프로젝트 이름이 입력된 경우 중복 확인 로직 수행
    var confirmResult = confirm(
      "이미 등록된 프로젝트 입니다. 불러오시겠습니까?"
    );
    // confirmResult를 사용하여 추가 로직 구현
  }
}

// 업체 담당자 필드 추가 함수
function addVendorFields() {
  var container = document.getElementById("additionalVendors");
  var existingFields = container.children.length;
  var newIndex = existingFields + 2; // 새로운 필드의 인덱스

  // 5개까지만 추가 가능 (0을 포함해 총 5개)
  if (existingFields < 4) {
    // 새로운 필드 HTML 생성
    var newFields = `
      <div class="flex-row added-input" id="vendorRow${newIndex}">
        <label><span> 프로젝트 담당자 (${newIndex})</span>
          <input class="input-field" type="text" name="vendorName${newIndex}">
        </label>
        <label><span> 연락처</span>
          <input class="input-field" type="text" name="vendorContact${newIndex}">
        </label>
        <label><span> 이메일</span>
          <input class="input-field" type="email" name="vendorEmail${newIndex}">
        </label>
        <button type="button" class="remove-vendor-button" onclick="removeVendorFields(${newIndex})">-</button>
      </div>`;

    // 새로운 필드 HTML을 container에 추가
    container.innerHTML += newFields;
  }

  // '+' 버튼 활성화/비활성화 상태 관리
  document.querySelector(".add-vendor-button").disabled = existingFields >= 4;
}

// 업체 담당자 필드 제거 함수
function removeVendorFields(index) {
  var container = document.getElementById("additionalVendors");
  if (container.children.length >= 0) {
    var elementToRemove = document.getElementById("vendorRow" + index);
    elementToRemove.remove();

    // 업데이트 후 인덱스 재구성
    reindexVendorFields();

    // '+' 버튼을 다시 활성화 할지 여부 확인
    document.querySelector(".add-vendor-button").disabled =
      container.children.length >= 5;
  } else {
    alert("최소 한 명의 담당자 정보는 필요합니다.");
  }
}

// 필드 인덱스 재구성 함수
function reindexVendorFields() {
  const container = document.getElementById("additionalVendors");
  const rows = container.querySelectorAll(".flex-row");
  rows.forEach((row, index) => {
    row.id = `vendorRow${index + 2}`;
    row.querySelector("span").innerText = `프로젝트 담당자 (${index + 2})`;
    row.querySelectorAll("input").forEach((input) => {
      const baseName = input.name.replace(/\d+$/, "");
      input.name = baseName + (index + 2);
    });
    row
      .querySelector(".remove-vendor-button")
      .setAttribute("onclick", `removeVendorFields(${index + 2})`);
  });
}
