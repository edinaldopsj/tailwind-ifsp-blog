import React from 'react';
import Table from '../../components/Table';
import Text from '../../components/Typography/Text';
import ColorButton from '../../components/Button/Color';
import Wrapper from '../../components/layout/Wrapper';
import { LANG } from '../../lang/pt-br';

/**
 * Page responsible for listing the news for admin or author
 * @returns News list for the admin or the author
 */
export default function List() {
  return (
    <Wrapper>
      <div className="flex justify-between mt-8 pt-4 px-4 md:px-16 md:text-center">
        <Text size="text-2xl">{LANG.REGISTER_NEWS.TITLE}</Text>
        <ColorButton>
          <Text>{LANG.REGISTER_NEWS.ACTIONS.NEW}</Text>
        </ColorButton>
      </div>
      <Table title={LANG.REGISTER_NEWS.TITLE}>
        <thead className="bg-gray-300">
          <tr className="h-16 border border-gray-100 rounded">
            <th className="text-left pl-5">
              <Text size="text-lg">{LANG.REGISTER_NEWS.NEWS_TABLE.NEWS_TITLE}</Text>
            </th>
            <th className="text-left w-32 md:w-52">
              <Text size="text-lg">{LANG.REGISTER_NEWS.NEWS_TABLE.NEWS_DATE}</Text>
            </th>
            <th className="text-center w-32 md:w-72">
              <Text size="text-lg">{LANG.REGISTER_NEWS.NEWS_TABLE.NEWS_ACTIONS}</Text>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-16 border border-gray-100 rounded">
            <td className="pl-5">
              <Text>Tres individuos fugiram numa moto em Santa Rita do Passa Quatro</Text>
            </td>
            <td>
              <div className="flex items-center">
                <Text>{new Date(Date.now()).toLocaleString('pt-BR')}</Text>
              </div>
            </td>
            <td>
              <div className="flex flex-col md:flex-row gap-2">
                <ColorButton color="blue">
                  <Text>{LANG.REGISTER_NEWS.ACTIONS.EDIT}</Text>
                </ColorButton>
                <ColorButton color="green">
                  <Text>{LANG.REGISTER_NEWS.ACTIONS.PUBLISH}</Text>
                </ColorButton>
                <ColorButton color="red">
                  <Text>{LANG.REGISTER_NEWS.ACTIONS.DELETE}</Text>
                </ColorButton>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
}
