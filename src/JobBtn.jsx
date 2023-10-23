const JobBtn = ({ jobs, setCurrentItem, currentItem }) => {
  // console.log(currentItem);
  return (
    <div className="btn-container">
      {jobs.map((job,index) => {
        return (
          <button
            className={currentItem == index ? "job-btn active-btn" : "job-btn"}
            onClick={() => setCurrentItem(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default JobBtn;
