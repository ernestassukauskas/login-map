import * as ActionTypes from './ActionTypes';
// import { baseUrl } from '../shared/baseUrl';

// export const fetchDishes = () => (dispatch) => {

//   dispatch(dishesLoading());

//   return fetch(baseUrl + 'dishes')
//   .then(response => {
//     if (response.ok) {
//       return response;
//     } else {
//       var error = new Error('Error ' + response.status + ': ' + response.statusText);
//       error.response = response;
//       throw error;
//     }
//   },
//   error => {
//         var errmess = new Error(error.message);
//         throw errmess;
//   })
//   .then(response => response.json())
//   .then(dishes => dispatch(addDishes(dishes)))
//   .catch(error => dispatch(dishesFailed(error.message)));
// };

export const dishesLoading = () => ({
  type: ActionTypes.ROUTES_LOADING
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.ROUTES_FAILED,
  payload: errmess
});

// export const addDishes = (dishes) => ({
//   type: ActionTypes.ADD_DISHES,
//   payload: dishes
// });

// export const fetchPromos = () => (dispatch) => {

//   dispatch(promosLoading());

//   return fetch(baseUrl + 'promotions')
//   .then(response => {
//     if (response.ok) {
//       return response;
//     } else {
//       var error = new Error('Error ' + response.status + ': ' + response.statusText);
//       error.response = response;
//       throw error;
//     }
//     },
//     error => {
//       var errmess = new Error(error.message);
//       throw errmess;
//     })
//   .then(response => response.json())
//   .then(promos => dispatch(addPromos(promos)))
//   .catch(error => dispatch(promosFailed(error.message)));
// };

// export const promosLoading = () => ({
//   type: ActionTypes.PROMOS_LOADING
// });

// export const promosFailed = (errmess) => ({
//   type: ActionTypes.PROMOS_FAILED,
//   payload: errmess
// });

// export const addPromos = (promos) => ({
//   type: ActionTypes.ADD_PROMOS,
//   payload: promos
// });

// export const fetchLeaders = () => (dispatch) => {

//   dispatch(leadersLoading());

//   return fetch(baseUrl + 'leaders')
//   .then(response => {
//     if (response.ok) {
//       return response;
//     } else {
//       var error = new Error('Error ' + response.status + ': ' + response.statusText);
//       error.response = response;
//       throw error;
//     }
//     },
//     error => {
//       var errmess = new Error(error.message);
//       throw errmess;
//     })
//   .then(response => response.json())
//   .then(leaders => dispatch(addLeaders(leaders)))
//   .catch(error => dispatch(leadersFailed(error.message)));
// };

// export const leadersLoading = () => ({
//   type: ActionTypes.LEADERS_LOADING
// });

// export const leadersFailed = (errmess) => ({
//   type: ActionTypes.LEADERS_FAILED,
//   payload: errmess
// });

// export const addLeaders = (leaders) => ({
//   type: ActionTypes.ADD_LEADERS,
//   payload: leaders
// });

// export const postFavorite = (dishId)  => (dispatch) => {
//   // Simulate Delay
//   setTimeout(() => {
//     dispatch(addFavorite(dishId));
//   }, 2000);
// };

// export const addFavorite = (dishId) => ({
//   type: ActionTypes.ADD_FAVORITE,
//   payload: dishId
// });

//
// export const postComment = (dishId, rating, author, comment,id)  => (dispatch) => {
//   const newComment = {
//       id: id,
//       dishId: dishId,
//       rating: rating,
//       author: author,
//       comment: comment
//     };

//     newComment.date = new Date().toISOString();

//   return fetch(baseUrl + 'comments', {
//     method: 'POST',
//     body: JSON.stringify(newComment),
//     headers: { "Content-Type": "application/json" },
//     credentials: "same-origin"
//   })
//   .then(response => {
//       if(response.ok) {
//           return response;
//       } else {
//           var error = new Error('Error ' + response.status + ': ' + response.statusText);
//           error.response = response;
//           throw error;
//       }
//   },
//   error => {
//       throw error;
//   })
//   .then(response => response.json())
//   .then(comment => setTimeout(() => {dispatch(addComment(comment))}, 2000))
//   .catch(error => {alert('Comment cannot be posted because of error: ' + error.message); });
// };

// export const addComment = (comment) => ({
//   type: ActionTypes.ADD_COMMENT,
//   payload: comment
// });

// export const deleteFavorite = (dishId) => ({
//   type: ActionTypes.DELETE_FAVORITE,
//   payload: dishId
// });