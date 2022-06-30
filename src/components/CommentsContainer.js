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
import '../App.css';

const CommentsContainer = ({ apiData, apiFetch }) => {
    console.log(apiData);

    // déclenchement apiCall au montage du composant + quand apiCall est modifié
    useEffect(() => {
        apiFetch();
    }, [apiFetch]);

    // Conditions ternaire pour l'affichage des données liée aux 3 actions
    const dataFeedback = apiData.isLoading ? (
        <p>Loading ...</p>
    ) : apiData.error ? (
        <p>{apiData.error}</p>
    ) : (
        apiData.comments.map((commentItem) => {
            return (
                <div key={commentItem.id} className='comment'>
                    <p>{commentItem.body}</p>
                </div>
            );
        })
    );

    return (<>
        {dataFeedback}
    </>);
};

const mapStateToProps = (state) => {
    return {
        apiData: state.comment,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        apiFetch: () => dispatch(apiCall()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
