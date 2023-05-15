// import React, {useState} from 'react'
// import { CommanBanner, Pagination } from '@/components/components'
// import banner from './Image/BlogSection.jpg'
// import Head from 'next/head'
// import { Card, CardContent, CardMedia, Button, CardActionArea, CardActions, Typography, Container, Grid, Box } from '@mui/material';


// export const paginate = (items, pageNumber, pageSize) => {
//   const startIndex = (pageNumber - 1) * pageSize;
//   return items.slice(startIndex, startIndex + pageSize);
//  };

 

// const Blog = ({ data }) => {
  
//   const [currentPage, setCurrentPage] = useState(1);
//   const pageSize = 10;
//   const paginatedPosts = paginate(data, currentPage, pageSize);
//   console.log(data.length)
//   const onPageChange = (page) => {
//     setCurrentPage(page);
//   };
//   return (
//    <>
//     <CommanBanner  image ={banner} title ='Blog'/>
//       <Container maxWidth='xxl'>
//       <Grid container>            
//       <Grid item xs={12} md={10}  className='mx-auto' mt={2} mb={4}>
//       <Grid container spacing={3}>

//             {
//               paginatedPosts.map((item) => {
//               return     <Grid item xs={12} md={3}>
//               <Box key={item.id}>
//               <Card sx={{ maxWidth: 345 }}>
//               <CardActionArea>
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image="/static/images/cards/contemplative-reptile.jpg"
//                   alt="green iguana"
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                    {item.title.rendered}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Lizards are a widespread group of squamate reptiles, with over 6,000
//                     species, ranging across all continents except Antarctica
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//               <CardActions>
//                 <Button size="small" color="primary">
//                   Share
//                 </Button>
//               </CardActions>
//             </Card>
//               </Box>
//             </Grid>

             
//             })}
//       </Grid>
   
//       </Grid>   
//       </Grid>
//     </Container>

    
//    <Pagination
//       items={data.length} // 100
//       currentPage={currentPage} // 1
//       pageSize={pageSize} // 10
//       onPageChange={onPageChange}
//        />
//    </>
//   )
// }
// export default Blog

// export const getStaticProps = async () => {
//   const res = await fetch(`https://pritams5.sg-host.com/wp-json/wp/v2/posts`);
//   const data = await res.json();
 
 
//   return {
//     props: { data },
//   };
//  };