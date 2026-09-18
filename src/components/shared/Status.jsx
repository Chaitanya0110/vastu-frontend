const Status = ({text, icon: Icon, bg, color}) => {
    return (
        <div className={`${bg} ${color} px-2 py-2 font-medium rounded-md flex items-center gap-1 text-sm`}>
            {text} <Icon size={15}></Icon>
        </div>
    )
};

export default Status;