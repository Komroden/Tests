import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './style.css';
import {userApi} from "../../api/request/auth";
import axios from 'axios';




export const Content:React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://www.filltext.com/?rows=4&id={number|10}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}',
            );
            setPosts(result.data);
        };
        fetchData();

    }, []);

    return (
        <div className='container'>
            <button onClick={userApi.logout}>logout</button>
            <h1 className='hello'>Hello World</h1>
        <TableContainer component={Paper} className='table'>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">FirstName</TableCell>
                        <TableCell align="right">LastName&nbsp;(g)</TableCell>
                        <TableCell align="right">Email&nbsp;(g)</TableCell>
                        <TableCell align="right">Phone&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((post) => (
                        <TableRow
                            key={post.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {post.id}
                            </TableCell>
                            <TableCell align="right">{post.firstName}</TableCell>
                            <TableCell align="right">{post.lastName}</TableCell>
                            <TableCell align="right">{post.email}</TableCell>
                            <TableCell align="right">{post.phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
};

