import React from 'react';
import styles from './index.less';
import $ from 'jquery';
import _ from 'lodash';
import { Button } from 'antd';
console.log($, _);
export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button onClick={() => console.log(123)}>click</Button>
    </div>
  );
};
