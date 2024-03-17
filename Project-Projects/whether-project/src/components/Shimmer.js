function Shimmer() {
  return Array(1)
    .fill(0)
    .map((n, i) => (
      <div className="flex justify-center p-5 m-5">
        <img
          src="https://user-images.githubusercontent.com/1201850/131474443-620d0777-5b42-4914-839d-e6250b083538.gif"
          alt="shim-pic"
          className="w-90 h-30 "
        />
        {/* <div className="w-40 h-5 bg-slate-700"></div> */}
      </div>
    ));
}
export default Shimmer;
