import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import Image from 'next/image'

export function AccordionSection({ question, answer }) {
  return (
    <AccordionItem>
      <h2 className="text-[#E57373]">
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            {question}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} className="text-base font-normal ">
        <Image
          src="/logo.jpg"
          width={80}
          height={80}
          className=" float-left mr-3"
        />
        {answer}
      </AccordionPanel>
    </AccordionItem>
  )
}
