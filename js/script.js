var convertBtn = document.querySelector(".btn"),
	URLinput = document.querySelector(".Input-text");
async function getLink(URL) {
	try {
		var res = await axios.get(`https://thieutrungkien.up.railway.app/fbdl?url=${URL}`);
		toastr.success("Đang tải video xuống!\nVui lòng chờ đợi!"), console.log(res.data.results.hd), axios({
			url: res.data.results.hd,
			method: "GET",
			responseType: "blob"
		}).then((response => {
			const url = window.URL.createObjectURL(new Blob([response.data])),
				link = document.createElement("a"),
				random = Math.floor(999999999999999 * Math.random());
			link.href = url, link.setAttribute("download", `FBVIDEO_${random}.mp4`), document.body.appendChild(link), link.click()
		}))
	} catch (e) {
		toastr.error("Đã xảy ra lỗi! Vui lòng kiểm tra lại quyền riêng tư bài viết!")
	}
}
convertBtn.addEventListener("click", (function() {
	console.log(`Input Url : ${URLinput.value}`), getLink(URLinput.value)
}));