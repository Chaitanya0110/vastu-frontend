import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

function Paginations({numberOfPages, totalProducts}) {
    const [searchParam ]= useSearchParams();
    const params = new URLSearchParams(searchParam);
    const pathname = useLocation().pathname;
    const navigate = useNavigate();
    const paramValue = searchParam.get("page") ? Number(searchParam.get("page")) : 1;

    const onChangeHandler = (event, value) => {
        params.set("page", value.toString());
        navigate(`${pathname}?${params.toString()}`); 
    };

    return (
        <div>
            <Stack spacing={2}>   
                <Pagination 
                    count={numberOfPages}
                    page={paramValue}
                    defaultPage={1}
                    siblingCount={1}
                    boundaryCount={1}
                    color="secondary" 
                    onChange={onChangeHandler} />
            </Stack>
        </div>
    );
}

export default Paginations;