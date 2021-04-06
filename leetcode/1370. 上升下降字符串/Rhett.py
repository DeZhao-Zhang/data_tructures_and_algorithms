# -*- coding:utf-8 -*-
# Author: Jhsy
# @Time: 2021/4/6 15:13


class Solution(object):
    def sortString(self, s):
        """
        :type s: str
        :rtype: str
        """

        num = [0] * 26

        # 根据传入字符串s获得桶内每个字符对应的个数
        for ch in s:
            num[ord(ch) - ord('a')] += 1

        res = list()

        while len(res) < len(s):
            # 从小到大进行遍历
            for i in range(0, 26):
                if num[i]:
                    res.append(chr(i + ord('a')))
                    num[i] -= 1
            # 从大到小进行遍历
            for i in range(25, -1, -1):
                if num[i]:
                    res.append(chr(i + ord('a')))
                    num[i] -= 1

        return "".join(res)

