// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { apiCall } from '../redux/comment/actionComment';

// const CommentsContainer = () => {

//     const apiData = useSelector((state) => state.comment.comments);
//     const apiComment = useDispatch();

//     console.log(apiData);

//     useEffect(() => {
//       apiComment();
//     }, [apiComment()]);

//     return <div>Hello</div>;
// };

// export default CommentsContainer;

// Méthodes mapStateToProps & mapDispatchToProps
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { apiCall } from '../redux/comment/actionComment';

const CommentsContainer = ({ apiData, apiFetch }) => {
    console.log(apiData);

    useEffect(() => {
        apiFetch();
    }, [apiFetch]);

    return <div>Hello</div>;
};

const mapStateToProps = (state) => {
    return {
        apiData: state.comment.comments,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        apiFetch: () => dispatch(apiCall()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
