/* eslint-disable no-unused-vars */
import { type RFC } from '@app-types'
import { type IText } from './Text.types'
import { useState } from 'react'
import { useLanguage } from '@app-contexts'
import { classnames } from '@app-functions'

const Text: RFC<IText> = ({ variant, className = '', children }) => {
    /** LANGUAGE HOOK = "en" | "ko" */
    const { lang } = useLanguage()

    if (variant === 'h1')
        return (
            <h1
                className={classnames(
                    lang === 'en'
                        ? 'font-head[en]-inter'
                        : 'font-head[ko]-myungjo',
                    className
                )}
            >
                {children}
            </h1>
        )
    if (variant === 'h2')
        return (
            <h2
                className={classnames(
                    lang === 'en'
                        ? 'font-head[en]-inter'
                        : 'font-head[ko]-myungjo',
                    className
                )}
            >
                {children}
            </h2>
        )
    if (variant === 'h3')
        return (
            <h3
                className={classnames(
                    lang === 'en'
                        ? 'font-head[en]-inter'
                        : 'font-head[ko]-myungjo',
                    className
                )}
            >
                {children}
            </h3>
        )
    if (variant === 'h4')
        return (
            <h4
                className={classnames(
                    lang === 'en'
                        ? 'font-head[en]-inter'
                        : 'font-head[ko]-myungjo',
                    className
                )}
            >
                {children}
            </h4>
        )
    if (variant === 'h5')
        return (
            <h5
                className={classnames(
                    lang === 'en'
                        ? 'font-head[en]-inter'
                        : 'font-head[ko]-myungjo',
                    className
                )}
            >
                {children}
            </h5>
        )
    if (variant === 'p')
        return (
            <p
                className={classnames(
                    lang === 'en'
                        ? 'font-head[en]-nunito'
                        : 'font-para[ko]-batang',
                    className
                )}
            >
                {children}
            </p>
        )
    return (
        <span
            className={classnames(
                lang === 'en' ? 'font-head[en]-nunito' : 'font-para[ko]-batang',
                className
            )}
        >
            {children}
        </span>
    )
}

export default Text
