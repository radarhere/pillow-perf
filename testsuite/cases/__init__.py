# coding: utf-8

from __future__ import print_function, unicode_literals, absolute_import

from .resize import cases as resize_cases


ALL_CASES = {
    "resize": resize_cases,
}


def collect_testsuites():
    return ALL_CASES.keys()


def load_cases(testsuite):
    return ALL_CASES[testsuite]
